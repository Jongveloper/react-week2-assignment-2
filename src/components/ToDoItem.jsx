import React from 'react';
import PropType from 'prop-types';

// 린트 오류 디버그중 : todo 객체 처리
function ToDoItem({ todo: { id, title }, onClick }) {
  return (
    <li>
      {title}
      <button
        type="button"
        key={id}
        onClick={() => {
          onClick(id);
        }}
      >
        완료
      </button>
    </li>
  );
}

ToDoItem.propTypes = {
  todo: PropType.exact({
    id: PropType.number.isRequired,
    title: PropType.string.isRequired,
  }).isRequired,
  onClick: PropType.func.isRequired,
};

export default ToDoItem;
