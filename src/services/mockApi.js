export const getContacts = () => {
  return [
    {id: 1, name: 'John Doe', avatar: '/src/assets/images/avatars/male-01.jpg'},
    {id: 2, name: 'Jane Smith', avatar: '/src/assets/images/avatars/female-01.jpg'},
    {id: 3, name: 'Alice Johnson', avatar: '/src/assets/images/avatars/female-02.jpg'},
  ];
};

export const getConversations = (contactId) => {
  const conversations = {
    1: [
      {message: 'Hello John!', from: 'me', time: '10:00 AM'},
      {message: 'Hi there!', from: 'John', time: '10:01 AM'},
    ],
    2: [
      {message: 'Hey Jane!', from: 'me', time: '11:00 AM'},
      {message: 'Hello!', from: 'Jane', time: '11:01 AM'},
    ],
    3: [
      {message: 'Hi Alice!', from: 'me', time: '12:00 PM'},
      {message: 'Hey!', from: 'Alice', time: '12:01 PM'},
    ],
  };
  return conversations[contactId] || [];
};
