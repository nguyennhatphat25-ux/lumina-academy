import mysql.connector
import random

# 1. Kết nối database MySQL
# Hãy đảm bảo bạn đã tạo database 'lumina_academy' và chạy các lệnh CREATE TABLE trước đó.
db = mysql.connector.connect(
    host="localhost",
    user="root",        # Thay bằng user MySQL của bạn nếu khác
    password="",        # Điền mật khẩu MySQL của bạn vào đây
    database="lumina_academy"
)
cursor = db.cursor()

try:
    # 2. Xóa dữ liệu cũ (để tránh lỗi trùng lặp nếu bạn chạy script nhiều lần)
    cursor.execute("SET FOREIGN_KEY_CHECKS = 0") # Tắt kiểm tra khóa ngoại tạm thời
    cursor.execute("TRUNCATE TABLE courses")
    cursor.execute("TRUNCATE TABLE categories")
    cursor.execute("SET FOREIGN_KEY_CHECKS = 1")
    
    # 3. Thêm 5 Danh mục (Categories) theo yêu cầu
    categories = [
        ("Luyện thi IELTS", "luyen-thi-ielts"),
        ("Luyện thi TOEIC", "luyen-thi-toeic"),
        ("Tiếng Anh Giao Tiếp", "tieng-anh-giao-tiep"),
        ("Tiếng Anh Doanh Nghiệp", "tieng-anh-doanh-nghiep"),
        ("Tiếng Anh Trẻ Em", "tieng-anh-tre-em")
    ]

    insert_cat_query = "INSERT INTO categories (name, slug) VALUES (%s, %s)"
    cursor.executemany(insert_cat_query, categories)
    db.commit()
    print(f"✅ Đã thêm thành công {cursor.rowcount} danh mục!")

    # Lấy ID của các danh mục vừa thêm để gán vào khóa học
    cursor.execute("SELECT id, name FROM categories")
    saved_categories = cursor.fetchall()

    # 4. Thêm 20 Khóa học cho mỗi danh mục (Tổng cộng 100 khóa học)
    courses_data = []
    
    # URL ảnh tạm thời (Placeholder) mang tone màu Xanh Navy/Cam của Lumina Academy
    thumbnails = [
        "https://via.placeholder.com/600x400/0A192F/FFFFFF?text=English+Course+Pro",
        "https://via.placeholder.com/600x400/F59E0B/FFFFFF?text=Premium+English",
        "https://via.placeholder.com/600x400/1E293B/FFFFFF?text=Mastering+English"
    ]

    # Vòng lặp sinh dữ liệu
    for cat in saved_categories:
        cat_id = cat[0]
        cat_name = cat[1]
        
        for i in range(1, 21): # Chạy 20 lần
            title = f"Khóa học {cat_name} - Cấp độ {i} (Masterclass)"
            description = f"Chương trình đào tạo {cat_name} độc quyền từ Lumina Academy. Giúp bạn nắm vững kiến thức, phát triển tư duy phản biện và kỹ năng giao tiếp xuất sắc."
            
            # Random giá tiền giống bảng giá trong hình
            price = random.choice([450000, 550000, 690000, 850000, 1100000, 1299000, 1450000, 2100000]) 
            thumbnail = random.choice(thumbnails)
            
            courses_data.append((cat_id, title, description, price, thumbnail))

    insert_course_query = "INSERT INTO courses (category_id, title, description, price, thumbnail_url) VALUES (%s, %s, %s, %s, %s)"
    cursor.executemany(insert_course_query, courses_data)
    db.commit()
    
    print(f"✅ Đã thêm thành công {cursor.rowcount} khóa học!")
    print("🎉 Quá trình bơm dữ liệu (Seeding) hoàn tất. Database đã sẵn sàng!")

except mysql.connector.Error as err:
    print(f"❌ Lỗi: {err}")
    db.rollback()

finally:
    cursor.close()
    db.close()