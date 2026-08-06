// Test
const video = document.getElementById('camera');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
let stream = null;

// open camera
startBtn.addEventListener('click', async () => {
    try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        video.srcObject = stream;
    } catch (err) {
        alert("Error accessing camera: " + err.message);
    }
});

// stop camera
stopBtn.addEventListener('click', () => {
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
        video.srcObject = null;
        stream = null;
    }
});