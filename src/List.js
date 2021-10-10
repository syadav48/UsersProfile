import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
const List = ({ users, removeItem, editItem }) => {
  return (
    <div>
      {users.map((user) => {
        const { id, first_name, avatar, email } = user;
        return (
          <article className='users-list' key={id}>
            <img src={avatar} alt={first_name} />
            <h3 className='title'>{first_name}</h3>
            <p>{email}</p>
            <div className='btn-container'>
              <button
                type='button'
                className='edit-btn'
                onClick={() => editItem(id)}
              >
                <FaEdit />
              </button>
              <button
                type='button'
                className='delete-btn'
                onClick={() => removeItem(id)}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;