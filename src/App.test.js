import App from './App';

let contactList;
beforeEach(() => {
    contactList = [
        {id: 1, number: '+3805957465', name: 'User1'},
        {id: 2, number: '+3809215421', name: 'User2'}
    ];
})

it('length of contacts should incremented ', () => {

    const addToContact = (data) => {
        const body = {
            id: contactList.length + 1,
            number: data.number,
            name: data.name
        }
        contactList = [...contactList, body];
    }
    addToContact({number: '+380555714765', name: 'test'});
    expect(contactList.length).toBe(3);
})

it('added contact name should be correct ', () => {

    const addToContact = (data) => {
        const body = {
            id: contactList.length + 1,
            number: data.number,
            name: data.name
        }
        contactList = [...contactList, body];
    }
    addToContact({number: '+380595774765', name: 'test'});
    expect(contactList[2].name).toBe('test');
})

it('added contact number should be correct ', () => {

    const addToContact = (data) => {
        const body = {
            id: contactList.length + 1,
            number: data.number,
            name: data.name
        }
        contactList = [...contactList, body];
    }
    addToContact({number: '+380595774765', name: 'test'});
    expect(contactList[2].number).toBe('+380595774765');
})

it('after deleting count of contact should be decrement', () => {
    const deleteContact = (id) => {
        contactList = contactList.filter(c => c.id !== id);
    }
    deleteContact(2);
    expect(contactList.length).toBe(1);
})

it('after changing name should be change', () => {

    const doChangeName = (id, name, number) => {
        contactList = (contactList.filter(c => {
            if (c.id === id) {
                c.name = name;
                c.number = number;
            }
            return c;
        }));
    }
    doChangeName(1, 'test', '123');
    expect(contactList[0].name).toBe('test');
    expect(contactList[0].number).toBe('123');
})

it('after filtering contact list should update', () => {

    let searchResult = [], newContactList = [];
    const doFilter = (text) => {
        if (text !== '') {
            newContactList = contactList.filter(c => {
                return c.number.includes(text) || c.name.toLowerCase().includes(text.toLowerCase());
            });
            searchResult = newContactList;
        } else {
            searchResult = contactList;
        }
    }
    doFilter('test');
    expect(searchResult.length).toBe(0);
})
