from flask import Flask, jsonify, request
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app) # Cho phép React gọi API

# Cấu hình kết nối MySQL
def get_db_connection():
    conn = mysql.connector.connect(
        host='localhost',
        user='root', # Đổi theo user MySQL của bạn
        password='', # Đổi theo pass MySQL của bạn
        database='lumina_academy'
    )
    return conn

# API lấy danh sách tất cả khóa học
@app.route('/api/courses', methods=['GET'])
def get_courses():
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute('SELECT * FROM courses')
    courses = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(courses)

# API tạo đơn hàng (Checkout)
@app.route('/api/orders', methods=['POST'])
def create_order():
    data = request.json
    conn = get_db_connection()
    cursor = conn.cursor()
    
    sql = "INSERT INTO orders (user_id, total_amount, payment_method) VALUES (%s, %s, %s)"
    val = (data['user_id'], data['total_amount'], data['payment_method'])
    
    cursor.execute(sql, val)
    conn.commit()
    
    cursor.close()
    conn.close()
    return jsonify({"message": "Order created successfully!", "order_id": cursor.lastrowid}), 201

if __name__ == '__main__':
    app.run(debug=True, port=5000)