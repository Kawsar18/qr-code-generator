const input = document.getElementById('input');
const btn = document.getElementById('btn');
const qrImg = document.getElementById('qrImg');

btn.onclick = () => {
  qrImg.src =
    'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' +
    input.value;
};
