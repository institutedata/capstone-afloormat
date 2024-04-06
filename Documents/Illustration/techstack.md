### Tech Stack

<br>

::: mermaid

graph TD
    Client[Client: React.js]
    Server[Server: Express.js]
    Middleware[Middleware: Multer, CORS]
    Database[Database: MongoDB]
    Storage[Static Files: Node.js Server]
    
    Client -- HTTP Requests --> Server
    Server -- Uses --> Middleware
    Middleware -- Handles File Uploads --> Storage
    Middleware -- Manages Cross-Origin Requests --> Client
    Server -- Queries & Updates --> Database
    Database -- Stores --> Data[Data: Photos, User Info]
    Client -- Fetch/Upload Images --> Storage

    style Client fill:#f98,stroke:#333,stroke-width:2px, color:#000
    style Server fill:#bbf,stroke:#333,stroke-width:2px, color:#000
    style Middleware fill:#fff,stroke:#333,stroke-width:2px, color:#000
    style Database fill:#9f9,stroke:#333,stroke-width:2px, color:#000
    style Storage fill:#ddf,stroke:#333,stroke-width:2px, color:#000

