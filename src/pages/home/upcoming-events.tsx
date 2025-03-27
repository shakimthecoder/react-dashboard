import { CalendarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { Text } from "@/components/text";

export const UpcomingEvents = () => {
  return (<Card
          title={
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <CalendarOutlined />
              <Text size="sm" style={{ marginLeft: "0.7rem"}}>
              Upcoming Events
              </Text>
            </div>
          }
          >
        </Card>
          )
          }