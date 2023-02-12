<!-- (Math.sin(Date.now()) * 255) + 255).toString(16)-->

<script>
  function trippyBG() {
    document.body.style.backgroundColor = 'rgb(' + (Math.sin(Date.now() / 500) * 150 + 150) + ',' + (Math.cos(Date.now() / 500) * 150 + 150) + ',' + 255 + ')';
  }
  window.setInterval(trippyBG, 1);
</script>

