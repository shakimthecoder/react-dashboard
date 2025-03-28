import { CalendarOutlined } from "@ant-design/icons";
import UpcomingEventsSkeleton  from "../../components/skeleton/upcoming-events";
import { useList } from "@refinedev/core";
import { Card, List, Badge} from "antd";
import { useState } from 'react';
import { Text } from "@/components/text";
import { DASHBOARD_CALENDAR_UPCOMING_EVENTS_QUERY } from "@/graphql/queries"

export const UpcomingEvents = () => {
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const { data, isLoading: eventsLoading } = useList({
    resource: 'events',
    meta: {
      gqlQuery: ''
    }
   })
  
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
               renderItem={(item: { color: string }) => {
               const renderDate = getDate(item.startDate, item.endDate);
                return (
                  <List.Item>
                    <List.Item.Meta
                     avatar={<Badge color={item.color} />}
                     title={<Text size="xs" strong>{renderDate}</Text>}
                     description={<Text ellipsis={{ tooltip: true }} strong>{item.title}</Text>}
                    />
                  </List.Item>
                )
               }}
              />
              )}
              </Card>)
            }

          