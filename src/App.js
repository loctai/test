import React, {
  useState,
  useEffect,
} from 'react';
import {
  Intent,
  ControlGroup,
  Button,
  RadioGroup,
  Radio,
} from '@blueprintjs/core';

import NumberInput from './NumberInput';
import Tree from './Tree';
import {
  randomly,
  levelOrder,
  binarySearchTree,
  BinaryTree
} from './tasks';

const binaryTree = new BinaryTree()
function App() {
  const [value, setValue] = useState();
  const [option, setOption] = useState('randomly');
  const [tree, setTree] = useState();
  // useEffect(() => setTree(), [option]);
  console.log(tree);
  return (
    <div style={{ margin: 'auto', width: '80%' }}>
      <RadioGroup
        style={{ marginTop: 10 }}
        inline
        label="Options"
        onChange={(e) => setOption(e.target.value)}
        selectedValue={option}
      >
        <Radio label="Randomly" value="randomly" />
        <Radio label="Level order" value="level" />
        <Radio label="Binary Search Tree" value="bst" />
      </RadioGroup>
      <ControlGroup style={{ marginTop: 10 }}>
        <NumberInput
          inline
          label="Input number:"
          value={value}
          onChange={setValue}
        />
        <div style={{ height: 30, marginLeft: 5 }}>
          <Button
            intent={Intent.PRIMARY}
            text="Add"
            onClick={() => {
              let _tree;
              switch (option) {
                case 'level':
                   _tree = levelOrder(value)
                  return setTree(_tree)
                case 'bst':
                  return binarySearchTree(value);
                default:
                   _tree = randomly(value)
                  return setTree(_tree)
              }
            }}
          />
          < Button
            intent={Intent.DANGER}
            text="Reset"
            onClick={() => {
              setTree();
              setValue();
            }}
          />
        </div>
      </ControlGroup>
      <Tree tree={tree} depth={0} />
    </div>
  );
}

export default App;
