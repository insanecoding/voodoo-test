import React from 'react';
import { roundNumber } from '../../util';
import Collapse from 'antd/es/collapse';
const { Panel } = Collapse;
import classes from './classes.module.css';

const Results = (data: any) => {
  if (!data || !data.applications) return null;

  return (
    <>
      <h2>Total revenue: {roundNumber(data.totalRevenue)}</h2>
      <Collapse className={classes.holder}>
        {Object.values(data.applications).map((item: any) => (
          <Panel
            header={`${item.name}: ${roundNumber(item.revenue)}`}
            key={item.name}
          >
            <Collapse>
              {Object.values(item.countries).map((nested: any) => (
                <Panel
                  header={`${nested.name}: ${roundNumber(nested.revenue)}`}
                  key={nested.name}
                >
                  <Collapse>
                    {Object.values(nested.platforms).map(
                      (deeplyNested: any) => (
                        <Panel
                          header={`${deeplyNested.name}: ${roundNumber(
                            deeplyNested.revenue,
                          )}`}
                          key={deeplyNested.name}
                          collapsible="disabled"
                        />
                      ),
                    )}
                  </Collapse>
                </Panel>
              ))}
            </Collapse>
          </Panel>
        ))}
      </Collapse>
    </>
  );
};

export default Results;
