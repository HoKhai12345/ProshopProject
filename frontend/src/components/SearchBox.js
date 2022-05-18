import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { setInputSearch } from "../actions/productActions";
const SearchBox = ({ history }) => {
  const [checkDisalbleInput, setCheckDisalbleInput] = useState(false);
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };
  // lấy trạng thái ô input search trong store
  const setInputSearch = useSelector((state) => state.setInputSearch);
  useEffect(() => {
    setCheckDisalbleInput(setInputSearch.checkInput);
  }, [checkDisalbleInput]);
  return (
    <Form onSubmit={submitHandler} inline>
      {setInputSearch.checkInput ? (
        <input
          type="text"
          name="q"
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search ..."
          disabled
        />
      ) : (
        <input
          type="text"
          name="q"
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search ..."
        />
      )}

      {/* <Button type='submit' variant='outline-success' className='p-2'>
        Search
      </Button> */}
      <button type="submit">
        <i className="fa fa-search"></i>
      </button>
    </Form>
  );
};

export default SearchBox;
