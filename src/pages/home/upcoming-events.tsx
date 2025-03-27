import { CalendarOutlined } from "@ant-design/icons";
import { Card, List} from "antd";
import { useState } from 'react';
import { Text } from "@/components/text";

export const UpcomingEvents = () => {
   const [isLoading, setIsLoading] = useState<boolean>(true);
  
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
              {isLoading ? (<List></List>
              ): <List></List>}
        </Card>
          )
          }