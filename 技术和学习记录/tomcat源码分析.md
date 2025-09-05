### HttpConnector入口
```java
/**
     * The background thread that listens for incoming TCP/IP connections and
     * hands them off to an appropriate processor.
     */
    public void run() {

        // Loop until we receive a shutdown command
        while (!stopped) {

            // Accept the next incoming connection from the server socket
            Socket socket = null;
            try {
                socket = serverSocket.accept();
                if (connectionTimeout > 0)
                    socket.setSoTimeout(connectionTimeout);
            } catch (AccessControlException ace) {
                log("socket accept security exception: " + ace.getMessage());
                continue;
            } catch (IOException e) {
                if (started && !stopped)
                    log("accept: ", e);
                break;
            }

            // Hand this socket off to an appropriate processor
            HttpProcessor processor = createProcessor();
            if (processor == null) {
                try {
                    log(sm.getString("httpConnector.noProcessor"));
                    socket.close();
                } catch (IOException e) {
                    ;
                }
                continue;
            }
            processor.assign(socket);

            // The processor will recycle itself when it finishes

        }

        // Notify the threadStop() method that we have shut ourselves down
        synchronized (threadSync) {
            threadSync.notifyAll();
        }

    }
```
- connector保存有一个buffer

### httpProcessor入口
所有的processor实际上就是类似于线程池一样的写法
```java
/**
     * The background thread that listens for incoming TCP/IP connections and
     * hands them off to an appropriate processor.
     */
    public void run() {

        // Process requests until we receive a shutdown signal
        while (!stopped) {

            // Wait for the next socket to be assigned
            Socket socket = await();
            if (socket == null)
                continue;

            // Process the request from this socket
            process(socket);

            // Finish up this request
            request.recycle();
            response.recycle();
            connector.recycle(this);

        }

        // Tell threadStop() we have shut ourselves down successfully
        synchronized (threadSync) {
            threadSync.notifyAll();
        }

    }
```


![[Pasted image 20230702002847.png]]