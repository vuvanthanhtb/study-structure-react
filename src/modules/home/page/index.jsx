import { Container, Card } from "react-bootstrap";
import "./_home.module.scss";

const HomePage = () => {
  return (
    <Container className="gpbank-overview my-5">
      <Card className="p-4 shadow-sm">
        <img
          src="https://www.gpbank.com.vn/images/news/upload/d86e991ae8a649d9b1d577d0c70221bf.jpg"
          alt="GPBank"
          style={{ marginBottom: 20 }}
        />

        <h2 className="section-title">Tổng quan về GPBank</h2>
        <p>
          Ngày <strong>17/1/2025</strong>, GPBank được chuyển đổi thành Ngân
          hàng Thương mại trách nhiệm hữu hạn một thành viên do VPBank làm chủ
          sở hữu 100% vốn.
        </p>

        <h4 className="mt-4">Địa chỉ liên hệ</h4>
        <p>Hội sở: Số 109 Trần Hưng Đạo, Quận Hoàn Kiếm, Hà Nội</p>
        <p>Điện thoại: (024) 3514 9094</p>
        <p>Fax: 04. 37 263 999</p>

        <h4 className="mt-4">Hệ thống mạng lưới</h4>
        <p>
          Mạng lưới kinh doanh của GPBank không ngừng được mở rộng với 01 Hội sở
          chính và gần 80 chi nhánh/phòng giao dịch/quỹ tiết kiệm trên toàn quốc
          cùng đội ngũ hơn 1.400 cán bộ nhân viên được đào tạo chuyên nghiệp.
          Trong thời gian tới, GPBank sẽ tiếp tục phát triển mạng lưới nhằm đưa
          các dịch vụ tài chính - ngân hàng chất lượng cao đến gần hơn với khách
          hàng.
        </p>

        <h4 className="mt-4">Sản phẩm - dịch vụ</h4>
        <p>
          GPBank cung cấp đầy đủ các loại hình dịch vụ tài chính - ngân hàng tầm
          cỡ quốc tế như: tiết kiệm - tiền gửi, tín dụng bảo lãnh, thanh toán
          quốc tế, dịch vụ tài chính - du học, kinh doanh ngoại tệ, dịch vụ thẻ,
          dịch vụ chuyển tiền, dịch vụ Internet Banking, Mobile Banking... và
          nhiều dịch vụ ngân hàng khác dựa trên nền tảng công nghệ tiên tiến
          nhằm tối đa hóa lợi ích của khách hàng.
        </p>

        <h4 className="mt-4">Đội ngũ cán bộ nhân viên</h4>
        <p>
          GPBank hết sức chú trọng thu hút và xây dựng nguồn nhân lực mới, trong
          đó chú trọng tập hợp đội ngũ nhân lực trẻ được đào tạo chính quy từ
          các trường đại học và nguồn lao động giàu kinh nghiệm trong lĩnh vực
          ngân hàng. Hiện nay, trên 97% cán bộ nhân viên của GPBank đã có trình
          độ đại học, trên đại học và thành thạo nghiệp vụ chuyên môn.
        </p>

        <h4 className="mt-4">Ưu thế công nghệ</h4>
        <p>
          Hiện đại hoá hệ thống Công nghệ thông tin là một trong những ưu tiên
          hàng đầu của GPBank nhằm tăng sức cạnh tranh và mang lại dịch vụ và
          tiện ích ngân hàng hàng đầu. GPBank là một trong những ngân hàng đầu
          tiên ứng dụng thành công phần mềm Hệ thống Ngân hàng lõi T24 (Core
          Banking) của Temenos (Thụy Sỹ), với khả năng xử lý trên 10.000 giao
          dịch/giây, giúp ngân hàng tối ưu hóa quy trình hoạt động và duy trì sự
          linh hoạt trong quản trị.
        </p>
      </Card>
    </Container>
  );
};

export default HomePage;
