// pm5WebBluetooth.ts
export async function connectAndReadPM5Data() {
    try {
      // Request permission to access Bluetooth devices
      const device = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true, // Change to specify your device's filters
      });
  
      // Log basic device information
      console.log('Device Name:', device.name);
      console.log('Device ID:', device.id);
      console.log('Device GATT Server:', device.gatt);
  
      // Return the device information (you can customize the returned data)
      return {
        name: device.name,
        id: device.id,
        server: device.gatt,
      };
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
  