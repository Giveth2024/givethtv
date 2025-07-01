document.addEventListener('DOMContentLoaded', () => {
    loadChannelData();
});

function goBack() {
    window.location.href = 'index.html';
}

function loadChannelData() {
    const channelJson = localStorage.getItem('selectedChannel');
    console.log(channelJson);

    if (!channelJson) {
        alert('No channel selected.');
        goBack();
        return;
    }

    const channel = JSON.parse(channelJson);

    // console.log(channel);
    // console.log(channel.id);

    if(channel.id === "NTVUganda.ug")
    {
        // alert(channel.id);
        window.location.href="iframe.html";
    }

    if( channel.id === "DisneyJunior.us@East" || channel.id === "DisneyChannel.us@East")
    {
        // alert(channel.id);
        window.location.href="Disney.html";
    }
    if(channel.id === "DisneyXD.us@West")
    {
        // alert(channel.id);
        window.location.href="disneyXD.html";
    }

    if (channel.id === "Nicktoons.us")
    {
        window.location.href="NickToons.html"
    }
    

    updateUI(channel);
    setupVideoPlayer(channel.url, channel.needsProxy);
}

// Convert country code (e.g., 'ug') to 🇺🇬
function countryCodeToFlagEmoji(code) {
    if (!code || code.length !== 2) return "";
    const codePoints = [...code.toUpperCase()].map(char => 0x1f1e6 + char.charCodeAt(0) - 65);
    return String.fromCodePoint(...codePoints);
}

function updateUI(channel) {
    // Extract country code from ID
    const match = channel.id.match(/\.(\w{2})$/);
    const countryCode = match ? match[1] : null;
    const flag = countryCodeToFlagEmoji(countryCode);

    // Clean the name by removing known redundant words (optional)
    let cleanedName = channel.name.replace(/Uganda|Africa|French|English|TV|International/gi, '').trim();

    // Clean Channel ID without country code
    let baseId = channel.id.replace(/\.(\w{2})$/, '');

    // Update UI elements
    document.getElementById('channel-name').textContent = `${flag ? flag + ' ' : ''}${cleanedName}`;
    document.getElementById('channel-title').textContent = cleanedName;
    document.getElementById('channel-id').textContent = `Channel ID: ${baseId}${flag ? ' ' + flag : ''}`;
    document.getElementById('channel-logo').src = channel.logo;
}


function setupVideoPlayer(url, needsProxy = false) {
    const player = document.getElementById('video-player');
    player.pause();
    player.removeAttribute('src');
    player.innerHTML = ''; // clear source and tracks

    let streamUrl = url;

    if (needsProxy) {
        alert(streamUrl);
        streamUrl = `http://localhost:3001/proxy?url=${url}`;
    }

    if (url.endsWith('.mpd')) {
        // Use dash.js for MPEG-DASH playback
        if (window.dashjs) {
        const dashPlayer = dashjs.MediaPlayer().create();
        dashPlayer.initialize(player, streamUrl, true);
        dashPlayer.on('error', (e) => {
            console.error('DASH error:', e);
        });
        } else {
        alert('dash.js library not loaded. Please include dash.js script.');
        }
    } else if (url.endsWith('.m3u8')) {
        // Use hls.js for HLS playback
        if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(streamUrl);
        hls.attachMedia(player);
        hls.on(Hls.Events.MANIFEST_PARSED, function () {
            player.play();
        });
        hls.on(Hls.Events.ERROR, function (event, data) {
            console.error('HLS error:', data);
        });
        } else if (player.canPlayType('application/vnd.apple.mpegurl')) {
        // Safari native support
        player.src = streamUrl;
        player.addEventListener('loadedmetadata', function () {
            player.play().catch(err => {
            console.warn('Autoplay failed, waiting for user interaction.', err);
            });
        });
        } else {
        alert('Your browser does not support HLS playback.');
        }
    } else {
        alert('Unsupported video format');
    }
}
