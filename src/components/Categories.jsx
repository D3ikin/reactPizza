import React from 'react';

function Categories({ filterItem, clickFilterItem }) {
  return (
    <div className="categories">
      <ul>
        <li className="active">Все</li>
        {filterItem.map((name, index) => (
          <li onClick={() => clickFilterItem(name)} key={`$(name)_$(index)`}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
