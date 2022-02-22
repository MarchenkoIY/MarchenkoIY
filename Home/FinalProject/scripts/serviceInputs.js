const scooterInputs = document.querySelectorAll('.scooterList > input');
const bikeInputs = document.querySelectorAll('.bikeList > input');
const cleanerInputs = document.querySelectorAll('.vacuumCleanerList > input');
const scaleInputs = document.querySelectorAll('.scalesCleanerList > input');
const scooterRadios = document.querySelector('.scooterList');
const bikeRadios = document.querySelector('.bikeList');
const cleanerRadios = document.querySelector('.vacuumCleanerList');
const scaleRadios = document.querySelector('.scalesCleanerList');
const scooterDivs = document.querySelectorAll('.scooterCostList > div');
const bikeDivs = document.querySelectorAll('.bikeCostList > div');
const cleanerDivs = document.querySelectorAll('.vacuumCleanerCostList > div');
const scalesDivs = document.querySelectorAll('.scalesCostList > div');

scooterRadios.addEventListener('click', function() {
    for (let i = 0; i < scooterInputs.length; i++) {
      if (scooterInputs[i].checked) {
        scooterDivs[0].style.marginLeft = `-${i * 100}%`;
      }
    }
  });

bikeRadios.addEventListener('click', function() {
    for (let i = 0; i < bikeInputs.length; i++) {
      if (bikeInputs[i].checked) {
        bikeDivs[0].style.marginLeft = `-${i * 100}%`;
      }
    }
  });

cleanerRadios.addEventListener('click', function() {
    for (let i = 0; i < cleanerInputs.length; i++) {
      if (cleanerInputs[i].checked) {
        cleanerDivs[0].style.marginLeft = `-${i * 100}%`;
      }
    }
  });

scaleRadios.addEventListener('click', function() {
    for (let i = 0; i < scaleInputs.length; i++) {
      if (scaleInputs[i].checked) {
        scalesDivs[0].style.marginLeft = `-${i * 100}%`;
      }
    }
  });