/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LibraryTable from './LibraryTable';

function AdminPage() {
    const [books, setBooks] = useState({
        title: '',
        author: '',
        subject: '',
        publishDate: '',
        availableCopies: '', // Make availableCopies a string for flexibility
    });

    const [bookList, setBookList] = useState([]);

    const handleInput = (event) => {
        setBooks((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (new Date(books.publishDate) >= Date.now()) {
            alert("Employee DOB cannot be in the future");
            return;
          }

        axios.post('http://localhost:8081/addBook', books)
            .then((response) => {
                console.log(response.data);
                setBookList((prevBooks) => [...prevBooks, response.data]);
                setBooks({
                    title: '',
                    author: '',
                    subject: '',
                    publishDate: '',
                    availableCopies: '',
                });
            })
            .catch((error) => {
                console.error('Error adding book:', error);
            });
    };

    const handleRemove = (bookId) => {
        axios.post('http://localhost:8081/removeBook', { id: bookId })
            .then((response) => {
                if (response.data.success) {
                    setBookList((prevBooks) => prevBooks.filter((book) => book.id !== bookId));
                } else {
                    console.error('Error removing book:', response.data.error);
                }
            })
            .catch((error) => {
                console.error('Error removing book:', error);
            });
    };

    useEffect(() => {
        axios.get('http://localhost:8081/getBooks')
            .then((response) => {
                setBookList(response.data);
            })
            .catch((error) => {
                console.error('Error fetching books:', error);
            });
    }, []);

    return (
        <div style={{ background: '#1e1e1e', color: '#fff', padding: '20px' }}>
            <div style={{ marginBottom: '20px' }}>
                <h1>Welcome, Admin!</h1>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <h2>Add Book</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '10px' }}>
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" maxLength='15' value={books.title} onChange={handleInput} style={{ marginLeft: '10px', padding: '5px' }} />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <label htmlFor="author">Author</label>
                        <input type="text" name="author" value={books.author} onChange={handleInput} style={{ marginLeft: '10px', padding: '5px' }} />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <label htmlFor="subject">Subject</label>
                        <input type="text" name="subject" value={books.subject} onChange={handleInput} style={{ marginLeft: '10px', padding: '5px' }} />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <label htmlFor="publishDate">Publish Date</label>
                        <input type="date" name="publishDate" value={books.publishDate} onChange={handleInput} style={{ marginLeft: '10px', padding: '5px' }} />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <label htmlFor="availableCopies">Available Copies</label>
                        <input type="text" name="availableCopies" value={books.availableCopies} onChange={handleInput} style={{ marginLeft: '10px', padding: '5px' }} />
                    </div>
                    <button type='submit' style={{ marginLeft: '10px', padding: '5px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>
                        Add Book
                    </button>
                </form>
            </div>

            <div>
                <h2>Book List</h2>
                <LibraryTable
                    books={bookList}
                    onRemove={handleRemove}
                    isAdmin={true}
                />
            </div>
        </div>
    );
}

export default AdminPage;*/


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LibraryTable from './LibraryTable';

function AdminPage() {
    const [books, setBooks] = useState({
        title: '',
        author: '',
        subject: '',
        publishDate: '',
        availableCopies: '', // Make availableCopies a string for flexibility
    });

    const [bookList, setBookList] = useState([]);

    const handleInput = (event) => {
        setBooks((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (new Date(books.publishDate) >= Date.now()) {
            alert("Employee DOB cannot be in the future");
            return;
        }

        axios.post('https://lib-2-knbm.onrender.com/addBook', books)
            .then((response) => {
                console.log(response.data);
                setBookList((prevBooks) => [...prevBooks, response.data]);
                setBooks({
                    title: '',
                    author: '',
                    subject: '',
                    publishDate: '',
                    availableCopies: '',
                });
            })
            .catch((error) => {
                console.error('Error adding book:', error);
            });
    };

    const handleRemove = (bookId) => {
        axios.post('https://lib-2-knbm.onrender.com/removeBook', { id: bookId })
            .then((response) => {
                if (response.data.success) {
                    setBookList((prevBooks) => prevBooks.filter((book) => book.id !== bookId));
                } else {
                    console.error('Error removing book:', response.data.error);
                }
            })
            .catch((error) => {
                console.error('Error removing book:', error);
            });
    };

    useEffect(() => {
        axios.get('https://lib-2-knbm.onrender.com/getBooks')
            .then((response) => {
                setBookList(response.data);
            })
            .catch((error) => {
                console.error('Error fetching books:', error);
            });
    }, []);

    return (
        <div style={{ background: '#fff', color: '#000', padding: '20px', textAlign: 'center' }}>
            <div style={{ marginBottom: '20px' }}>
                <h1>Welcome, Admin!</h1>
            </div>

            <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                <h2>Add Book</h2>
                <form onSubmit={handleSubmit} style={{ marginLeft: '20px' }}>
                    <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" maxLength='15' value={books.title} onChange={handleInput} style={{ marginLeft: '10px', padding: '5px' }} />
                    </div>
                    <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                        <label htmlFor="author">Author</label>
                        <input type="text" name="author" value={books.author} onChange={handleInput} style={{ marginLeft: '10px', padding: '5px' }} />
                    </div>
                    <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                        <label htmlFor="subject">Subject</label>
                        <input type="text" name="subject" value={books.subject} onChange={handleInput} style={{ marginLeft: '10px', padding: '5px' }} />
                    </div>
                    <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                        <label htmlFor="publishDate">Publish Date</label>
                        <input type="date" name="publishDate" value={books.publishDate} onChange={handleInput} style={{ marginLeft: '10px', padding: '5px' }} />
                    </div>
                    <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                        <label htmlFor="availableCopies">Available Copies</label>
                        <input type="text" name="availableCopies" value={books.availableCopies} onChange={handleInput} style={{ marginLeft: '10px', padding: '5px' }} />
                    </div>
                    <button type='submit' style={{ marginLeft: '10px', padding: '5px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>
                        Add Book
                    </button>
                </form>
            </div>

            <div>
                <h2>Book List</h2>
                <LibraryTable
                    books={bookList}
                    onRemove={handleRemove}
                    isAdmin={true}
                    tableStyle={{ background: '#007bff', color: '#fff' }} // Table style
                />
            </div>
        </div>
    );
}

export default AdminPage;
