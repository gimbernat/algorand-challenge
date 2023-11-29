### Docker

```jsx
docker build -t algorand-challenge .
docker run -p 8000:8000 algorand-challenge
```

### Tests (WIP)

```jsx
npm run test 
```

### Frontend 
https://github.com/gimbernat/algorand-challenge-frontend


### Endpoints

### 0**. Websockets (Notifications and updates to Frontend)**

- **URL:**  **`ws://localhost:8000`**

### **1. Check Account States (GET)**

- **Endpoint:** **`GET /account-watcher/`**
- **Description:** Check the states of all accounts.
- **URL:** **`http://localhost:8000/api/account-watcher/`**

### **2. Add an Account to Watch (POST)**

- **Endpoint:** **`POST /account-watcher/add/:address`**
- **URL:** **`http://localhost:8000/api/account-watcher/add/0x12345`**

### **3. Remove an Account from Watch (DELETE)**

- **Endpoint:** **`DELETE /account-watcher/remove/:address`**
- **URL:** **`http://localhost:8000/api/account-watcher/remove/0x12345`**
