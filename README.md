# Ethical Network Testing Tool

This tool is designed for ethical network testing purposes only. It allows you to perform various types of network attacks in a controlled environment to test the resilience of your network infrastructure.

## Features

- **SYN Flood**: Sends a large number of SYN requests to overwhelm the target's resources.
- **UDP Flood**: Sends a large number of UDP packets to random ports.
- **HTTP Flood**: Sends a large number of HTTP requests to overwhelm the web server.
- **HTTPS Flood**: Sends a large number of HTTPS requests to overwhelm the web server.
- **Rate Limiting**: Control the rate of packet sending to avoid detection.

## Usage

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run the Tool**:
   ```bash
   npm start
   ```

3. **Use the GUI**:
   - Enter the target IP address or domain.
   - Select the attack type from the dropdown menu.
   - Enter the rate limit (optional, default is 100).
   - Click the "Start Attack" button to begin the attack.

## Attack Types

- **SYN Flood**
- **UDP Flood**
- **HTTP Flood**
- **HTTPS Flood**
- **POST Flood**
- **SSL Exhaustion**
- **Minecraft Login Flood**
- **Minecraft Chat Flood**
- **Roblox Login Flood**
- **Roblox Chat Flood**
- **Fortnite Login Flood**
- **Fortnite Chat Flood**
- **ICMP Flood**
- **DNS Amplification**
- **Port Scan**
- **ARP Spoofing**

## Example

To perform a Minecraft login flood attack on the target `example.com` with a rate limit of 50 packets per second:
1. Enter `example.com` in the target field.
2. Select `Minecraft Login Flood` from the attack type dropdown.
3. Enter `50` in the rate limit field.
4. Click the "Start Attack" button.

To perform an ICMP flood attack on the target `example.com` with a rate limit of 50 packets per second:
1. Enter `example.com` in the target field.
2. Select `ICMP Flood` from the attack type dropdown.
3. Enter `50` in the rate limit field.
4. Click the "Start Attack" button.

To perform a DNS amplification attack on the target `example.com` with a rate limit of 50 packets per second:
1. Enter `example.com` in the target field.
2. Select `DNS Amplification` from the attack type dropdown.
3. Enter `50` in the rate limit field.
4. Click the "Start Attack" button.

To perform a POST flood attack on the target `example.com` with a rate limit of 50 packets per second:
1. Enter `example.com` in the target field.
2. Select `POST Flood` from the attack type dropdown.
3. Enter `50` in the rate limit field.
4. Click the "Start Attack" button.

To perform an SSL exhaustion attack on the target `example.com` with a rate limit of 50 packets per second:
1. Enter `example.com` in the target field.
2. Select `SSL Exhaustion` from the attack type dropdown.
3. Enter `50` in the rate limit field.
4. Click the "Start Attack" button.

To perform a port scan on the target `example.com` with a rate limit of 50 packets per second:
1. Enter `example.com` in the target field.
2. Select `Port Scan` from the attack type dropdown.
3. Enter `50` in the rate limit field.
4. Click the "Start Attack" button.

To perform ARP spoofing on the target `example.com` with a rate limit of 50 packets per second:
1. Enter `example.com` in the target field.
2. Select `ARP Spoofing` from the attack type dropdown.
3. Enter `50` in the rate limit field.
4. Click the "Start Attack" button.

To perform a Roblox login flood attack on the target `example.com` with a rate limit of 50 packets per second:
1. Enter `example.com` in the target field.
2. Select `Roblox Login Flood` from the attack type dropdown.
3. Enter `50` in the rate limit field.
4. Click the "Start Attack" button.

To perform a Roblox chat flood attack on the target `example.com` with a rate limit of 50 packets per second:
1. Enter `example.com` in the target field.
2. Select `Roblox Chat Flood` from the attack type dropdown.
3. Enter `50` in the rate limit field.
4. Click the "Start Attack" button.

To perform a Fortnite login flood attack on the target `example.com` with a rate limit of 50 packets per second:
1. Enter `example.com` in the target field.
2. Select `Fortnite Login Flood` from the attack type dropdown.
3. Enter `50` in the rate limit field.
4. Click the "Start Attack" button.

To perform a Fortnite chat flood attack on the target `example.com` with a rate limit of 50 packets per second:
1. Enter `example.com` in the target field.
2. Select `Fortnite Chat Flood` from the attack type dropdown.
3. Enter `50` in the rate limit field.
4. Click the "Start Attack" button.

## Disclaimer

This tool is for educational and ethical testing purposes only. Unauthorized use of this tool is illegal and unethical. Always obtain explicit permission before testing any network or system.

## License

This project is licensed under the ISC License.
