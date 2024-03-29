import React from 'react';
import ContactItem from "./ContactItem"
import SearchBox from "./SearchBox"
import { useSelector } from "react-redux"

const ContactList = () => {

  const contactList = useSelector(state => state.contactList)

  return (
    <div>
        <SearchBox />
        { contactList.map( (item)=> (<ContactItem item={item} />))} 
    </div>
  )
}

// <ContactItem item={item} /> 처럼 부모에서 자식으로 보낼 때는 props 로 보내주어도 된다.
// 리덕스에서 state 를 가지고 오는 게 더 복잡할 때는 props 를 이용하도록 하자

export default ContactList