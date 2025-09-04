# WebSocket Setup Guide

This guide explains how to set up and use the WebSocket functionality in your NestJS API.

## Installation

First, install the required WebSocket dependencies:

```bash
npm install @nestjs/websockets @nestjs/platform-socket.io socket.io
```

## Features

The WebSocket gateway provides real-time communication for listener events. When `processListenerEvent` is called in the `ListenerService`, it automatically emits a WebSocket event to all connected clients.

### Event Structure

Each WebSocket event has the following structure:

```typescript
{
  type: string,           // The event type (e.g., 'flight.departed', 'flight.arrived')
  data: {
    eventId: number,      // Unique event ID
    variant: string,      // Event variant
    sender: string,       // Event sender (e.g., 'fshub')
    data: any,           // Event data
    sentAt: Date,        // When the event was sent
    status: string       // Event status
  },
  timestamp: string      // ISO timestamp when the WebSocket event was emitted
}
```

## Usage

### Server-Side

The WebSocket gateway is automatically integrated into your `ListenerService`. When `processListenerEvent` is called, it will:

1. Process the event as usual
2. Emit a WebSocket event to all connected clients
3. Include event details in the WebSocket message

### Client-Side

Connect to the WebSocket server using Socket.IO:

```javascript
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

// Listen for listener events
socket.on('listener-event', (data) => {
  console.log('Received event:', data.type);
  console.log('Event data:', data.data);
});

// Join specific rooms (optional)
socket.emit('join', 'room-name');

// Leave rooms (optional)
socket.emit('leave', 'room-name');
```

### Available Event Types

Based on your current listener service, the following event types are supported:

- `profile.updated` - When a pilot updates their profile
- `flight.departed` - When a flight departs
- `flight.arrived` - When a flight arrives
- `flight.completed` - When a flight is completed
- `flight.updated` - When a flight is updated
- `website.test` - For testing purposes

## Testing

A test HTML page is available at `/websocket-test.html` to verify the WebSocket functionality.

1. Start your NestJS server
2. Open `http://localhost:3000/websocket-test.html` in your browser
3. The page will automatically connect to the WebSocket server
4. Any listener events will be displayed in real-time

## Configuration

### CORS Settings

The WebSocket gateway is configured with CORS enabled. You may need to adjust the origin settings in `websocket.gateway.ts`:

```typescript
@WebSocketGateway({
  cors: {
    origin: '*', // Change this to your frontend URL in production
    methods: ['GET', 'POST'],
  },
})
```

### Room Management

The gateway supports room-based messaging for targeted communication:

```typescript
// Emit to all clients
this.websocketGateway.emitEvent(eventType, data);

// Emit to specific room
this.websocketGateway.emitEventToRoom(roomName, eventType, data);
```

## Security Considerations

1. **Authentication**: Consider implementing authentication for WebSocket connections
2. **Rate Limiting**: Implement rate limiting for WebSocket events
3. **CORS**: Configure CORS properly for production environments
4. **Validation**: Validate incoming WebSocket messages

## Troubleshooting

### Common Issues

1. **Connection Failed**: Ensure the WebSocket dependencies are installed
2. **Events Not Received**: Check that the client is properly listening for 'listener-event'
3. **CORS Errors**: Verify CORS settings match your frontend URL

### Debug Mode

Enable debug logging by checking the console for WebSocket connection messages:

```
WebSocket Gateway initialized
Client connected: [client-id]
Client disconnected: [client-id]
```

## Example Integration

Here's a complete example of how to integrate WebSocket events in a React component:

```jsx
import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

function FlightEvents() {
  const [events, setEvents] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io('http://localhost:3000');
    
    newSocket.on('listener-event', (data) => {
      setEvents(prev => [data, ...prev]);
    });

    setSocket(newSocket);

    return () => newSocket.close();
  }, []);

  return (
    <div>
      <h2>Flight Events</h2>
      {events.map((event, index) => (
        <div key={index}>
          <strong>{event.type}</strong>
          <pre>{JSON.stringify(event.data, null, 2)}</pre>
        </div>
      ))}
    </div>
  );
}

export default FlightEvents;
```
