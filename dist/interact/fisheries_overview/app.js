(function() {
  'use strict';
  document.addEventListener('DOMContentLoaded', ready);
  function ready() {
    document.getElementById('stories__salmon')
      .addEventListener('click', handleStoriesSalmonClick);
    function handleStoriesSalmonClick() {
      window.parent.handleVideoClick()
    }
  }
})();
