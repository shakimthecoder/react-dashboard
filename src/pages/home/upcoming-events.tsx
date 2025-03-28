import { CalendarOutlined } from "@ant-design/icons";
import UpcomingEventsSkeleton  from "../../components/skeleton/upcoming-events";
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
              {isLoading ? (
              <List
              itemLayout="horizontal"
              dataSource={Array.from({ length: 5}).map(( _, index) =>
              ({ id: index})
              )}
              renderItem={() => <UpcomingEventsSkeleton />}
               />
              ): (
              <List
               itemLayout="horizontal"
               dataSource={[]} 
               renderItem={(item) => {
                return (
                  <List.Item>
                    <List.Item.Meta>
                    </List.Item.Meta>
                  </List.Item>
                )
               }
              }
                />
              )}
              </Card>)
            }

          