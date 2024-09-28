>>Technologies Used
Node.js
Express.js
MongoDB (Mongoose)
Multer (for file upload)
CSV-parser.

>>API Endpoints
Uploading CSV:![uplaod csv](https://github.com/user-attachments/assets/79ab69c8-2acb-4e3a-85b1-a36f5c03a11e)

Fetching Balance:![fetch balance](https://github.com/user-attachments/assets/3ad6b144-9a38-4a4e-a6d1-92f57c74632f)

If the timestamp input would be "2022-09-27 12:00:00", then the output would be:![after calculation](https://github.com/user-attachments/assets/9cfe2c1a-06e4-46cd-8d95-ef563d937fbb)

>>Folder Structure
/src
    /controllers  -- API logic
    /models        -- Database schema
    /routes       --  API routes
    /services     --  Business logic
    /uploads      --  Stores uploaded CSV files
index.js          --  Main app entry point
.env              -- Environment variables

.env file
PORT = 8080
MONGO_URI=mongodb+srv://seikhabubakar47:Seikh786@cluster0.mhxe0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
