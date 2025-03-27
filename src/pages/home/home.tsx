
import { Col, Row } from "antd"
import { UpcomingEvents } from "./upcoming-events";
import DashboardDeals from "./dashboard-deals";

export const Home = () => {
    return (
    <div>
        <Row
        gutter={[32, 32]}
        style={{ marginTop: '32px' }}>
        <Col
        xs={24}
        sm={24}
        xl={8}
        style=
        {{ height: '460px' 
        }}
        >
            <UpcomingEvents />
        </Col>
        <Col
        xs={24}
        sm={24}
        xl={8}
        style=
        {{ height: '460px' 
        }}
        >
            <DashboardDeals />
        </Col>
        </Row>
        </div>)
    }