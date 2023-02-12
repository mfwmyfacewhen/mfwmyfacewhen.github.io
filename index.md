<!-- (Math.sin(Date.now()) * 255) + 255).toString(16)-->

<script>
  function trippyBG() {
    document.body.style.backgroundColor = 'rgb(' + Math.sin(Date.now()) * 255 + ',' + Math.sin(Date.now()) * 255 + ',' + Math.sin(Date.now()) * 255 + ')';
  }
  window.setInterval(trippyBG, 1);
</script>

