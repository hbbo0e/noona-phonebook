let initialState = {
    contactList : []
};
// 연락처 배열이 있어야 name 과 phoneNumber 가 넘어올 때 저장하여 사용할 수 있다.

function reducer(state = initialState, action){

    // action 이 계속 중복된다!! 객체 destructuring 문법을 사용하자
    const {type, payload} = action

    switch(type){
        case "ADD_CONTACT" : 
            return {
                ...state,
                contactList : [
                    ...state.contactList,
                    {
                        name : payload.name,
                        phoneNumber : payload.phoneNumber,
                    },
                ]
            };
        default : 
            return { ...state }
    }
}

// reducer 는 상태 (state) 를 변화 (action) 시켜야 하기 때문에 매개변수로 state 와 action 을 받아야 한다. 

export default reducer;