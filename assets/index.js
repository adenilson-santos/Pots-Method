document.querySelectorAll(".sallary").forEach(function (sallaryEl) {
  sallaryEl.oninput = function (e) {
    var value = e.target.value

    updatePots(value)
  }
})

function updatePots (sallary) {
  document.querySelectorAll('.pots').forEach(function (rule) {
    rule.querySelectorAll('[data-percent]').forEach(function (percentEl) {
      var percent = parseInt(percentEl.dataset.percent) / 100

      var result = parseFloat(sallary) * percent

      percentEl.querySelector('.percent__result').innerHTML = isNaN(result) ? '0.00' : parseFloat(result, 2).toFixed(2)
    })
  })
}
