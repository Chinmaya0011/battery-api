window.addEventListener('DOMContentLoaded', () => {
    if ('getBattery' in navigator) {
      navigator.getBattery().then(updateBatteryStatus);
    } else {
      document.getElementById('batteryLevel').textContent = 'Not Supported';
      document.getElementById('batteryStatus').textContent = 'Not Supported';
    }
  });
  
  function updateBatteryStatus(battery) {
    const batteryLevelElement = document.getElementById('batteryLevel');
    const batteryStatusElement = document.getElementById('batteryStatus');
  
    function updateBatteryInfo() {
      const batteryLevel = Math.round(battery.level * 100);
      batteryLevelElement.textContent = batteryLevel + '%';
      batteryStatusElement.textContent = battery.charging ? 'Charging' : 'Discharging';
  
      // You can add your custom logic here if needed
    }
  
    updateBatteryInfo();
  
    battery.addEventListener('chargingchange', updateBatteryInfo);
    battery.addEventListener('levelchange', updateBatteryInfo);
  }
  