<!-- (Math.sin(Date.now()) * 255) + 255).toString(16)-->

<script>
  function trippyBG() {
    document.body.style.backgroundColor = 'rgb(' + Math.sin(Date.now() / 500) * 255 + ',' + Math.cos(Date.now() / 500) * 255 + ',' + Math.tan(Date.now() / 500) * 255 + ')';
  }
  window.setInterval(trippyBG, 1);
</script>

