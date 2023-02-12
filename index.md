<!-- (Math.sin(Date.now()) * 255) + 255).toString(16)-->

<script>
  function trippyBG() {
    document.body.style.backgroundColor = 'rgb(' + (Math.sin(Date.now() / 1000) * 255 + 200) + ',' + (Math.cos(Date.now() / 500) * 255 + 200) + ',' + (Math.cos(Date.now() / 500) * 255 + 200) + ')';
  }
  window.setInterval(trippyBG, 1);
</script>

