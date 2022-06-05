import React from 'react';
import PropTypes from 'prop-types';
import { Intent, Tag } from '@blueprintjs/core';
import _ from 'lodash';

import NumberInput from './NumberInput';

function Tree({
  tree,
  depth,
  intent,
}) {
  if (!tree) return null;
  const { value, left, right } = tree;
  return (
    <div style={{ marginTop: 5 }}>
      <span>
        {depth ? `(${depth})${_.repeat('-', depth)}` : ''}
        <Tag
          minimal
          intent={intent}
          round
          onRemove={() => {
            //TODO: Task 3
          }}
        >
          <NumberInput value={value} />
        </Tag>
      </span>
      <Tree tree={left} depth={depth + 1} intent={Intent.PRIMARY} />
      <Tree tree={right} depth={depth + 1} intent={Intent.SUCCESS} />
    </div>
  );
}

Tree.propTypes = {
  intent: PropTypes.string,
  tree: PropTypes.shape({
    value: PropTypes.number.isRequired,
    left: PropTypes.object,
    right: PropTypes.object,
  }),
  depth: PropTypes.number.isRequired,
};

Tree.defaultProps = {
  intent: Intent.DANGER,
  tree: undefined,
};

export default Tree;
