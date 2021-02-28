import React from '../../../_snowpack/pkg/react.js';
import { roundNumber } from '../../util/index.js';
import Collapse from '../../../_snowpack/pkg/antd/es/collapse.js';
const { Panel } = Collapse;
import classes from './classes.module.css.proxy.js';
const Results = data => {
  if (!data || !data.applications) return null;
  return /* @__PURE__ */ React.createElement(
    React.Fragment,
    null,
    /* @__PURE__ */ React.createElement(
      'h2',
      null,
      'Total revenue: ',
      roundNumber(data.totalRevenue),
    ),
    /* @__PURE__ */ React.createElement(
      Collapse,
      {
        className: classes.holder,
      },
      Object.values(data.applications).map(item =>
        /* @__PURE__ */ React.createElement(
          Panel,
          {
            header: `${item.name}: ${roundNumber(item.revenue)}`,
            key: item.name,
          },
          /* @__PURE__ */ React.createElement(
            Collapse,
            null,
            Object.values(item.countries).map(nested =>
              /* @__PURE__ */ React.createElement(
                Panel,
                {
                  header: `${nested.name}: ${roundNumber(nested.revenue)}`,
                  key: nested.name,
                },
                /* @__PURE__ */ React.createElement(
                  Collapse,
                  null,
                  Object.values(nested.platforms).map(deeplyNested =>
                    /* @__PURE__ */ React.createElement(Panel, {
                      header: `${deeplyNested.name}: ${roundNumber(
                        deeplyNested.revenue,
                      )}`,
                      key: deeplyNested.name,
                      collapsible: 'disabled',
                      className: classes.deeplyNestedPanel,
                    }),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    ),
  );
};
export default Results;
