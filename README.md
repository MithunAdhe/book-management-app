# 📚 Book Management App

A full-stack web application for managing books using **Django REST Framework** (Backend) and **React** (Frontend).

---

## 🚀 **Features**

- **Add, Edit, Delete, and View Books**  
- Upload book cover images  
- RESTful API endpoints  
- React-powered user interface  

---

## 🛠️ **Tech Stack**

- **Backend**: Django, Django REST Framework  
- **Frontend**: React, Axios  
- **Database**: MySQL
- **Deployment**: Local development (Render)  

---

## 📦 **Installation**

### 🔹 **Backend (Django)**

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/book-management-app.git
    cd book-management-app
    ```

2. **Create and activate a virtual environment**:

    - On Unix/macOS:
        ```bash
        python -m venv venv
        source venv/bin/activate
        ```

    - On Windows:
        ```bash
        python -m venv venv
        venv\Scripts\activate
        ```

3. **Install backend dependencies**:
    ```bash
    pip install -r requirements.txt
    ```

4. **Run database migrations**:
    ```bash
    python manage.py migrate
    ```

5. **Start the Django server**:
    ```bash
    python manage.py runserver
    ```

---

### 🔹 **Frontend (React)**

1. **Navigate to the frontend folder**:
    ```bash
    cd frontend
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the React development server**:
    ```bash
    npm start
    ```

---

## 🌐 **API Endpoints**

| Method | Endpoint         | Description              |
|---------|------------------|--------------------------|
| GET     | `/api/books/`    | List all books           |
| POST     | `/api/books/`    | Add a new book           |
| GET     | `/api/books/:id/` | Retrieve a single book   |
| PUT      | `/api/books/:id/` | Update a book            |
| DELETE   | `/api/books/:id/` | Delete a book            |

---

## 🖼️ **Screenshots**

### Book Management UI

![Book Add View](assets/book_add.jpg)
*Book adding page*

### Book Details View

![Book List and details](assets/book_list.jpg)
*Detailed view of books and list of books*
---

## 🌱 **Future Improvements**

- Deploy to **Heroku**, **Render**, or **AWS**.
- Implement **authentication** for user management.
- Enhance the **UI/UX** with more interactive components.

---

## ✨ **Contributors**

- [Mithun Adhe](https://www.linkedin.com/in/mithun-adhe)

---

## 📜 **License**

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---
