function algoritmaRC4(key, str) {
  // Inisialisasi S-Box
  var s = [],
    j = 0,
    x,
    res = '';

  for (var i = 0; i < 256; i++) {
    s[i] = i;
  }

  // Random S-Box
  for (i = 0; i < 256; i++) {
    j = (j + s[i] + key.charCodeAt(i % key.length)) % 256;
    x = s[i];
    s[i] = s[j];
    s[j] = x;
  }

  // Pembangkitan key-stream
  i = 0;
  j = 0;
  for (var y = 0; y < str.length; y++) {
    i = (i + 1) % 256;
    j = (j + s[i]) % 256;
    x = s[i];
    s[i] = s[j];
    s[j] = x;
    res += String.fromCharCode(str.charCodeAt(y) ^ s[(s[i] + s[j]) % 256]);
  }

  return res;
}

function encrypt() {
  let str = document.getElementById('message').value;
  let key = document.getElementById('key').value;

  let result = algoritmaRC4(key, str);
  document.getElementById('result').value = result;
}

function clearAll() {
  document.getElementById('message').value = '';
  document.getElementById('key').value = '';
  document.getElementById('result').value = '';
}
