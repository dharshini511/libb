/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LibraryTable from './LibraryTable';

function Home() {
    const [books, setBooks] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isAdmin, setIsAdmin] = useState(false); // Add isAdmin state

    const handleBorrow = (bookId) => {
        axios.post('http://localhost:8081', { id: bookId })
            .then((response) => {
                if (response.data.success) {
                    console.log('Borrowing successful! You have successfully borrowed the book.');
                    fetchBooks();
                } else {
                    console.error('Borrowing failed:', response.data.error);
                }
            })
            .catch((error) => {
                console.error('Error borrowing book:', error);
            });
    };

    const handleRemove = (bookId) => {
        axios.post('http://localhost:8081', { id: bookId })
            .then((response) => {
                if (response.data.success) {
                    console.log('Removal successful! The book has been removed.');
                    fetchBooks();
                } else {
                    console.error('Removal failed:', response.data.error);
                }
            })
            .catch((error) => {
                console.error('Error removing book:', error);
            });
    };

    const fetchBooks = () => {
        const url = searchQuery
            ? `http://localhost:8081/searchBooks?query=${searchQuery}`
            : 'http://localhost:8081/getBooks';

        axios.get(url)
            .then(response => {
                setBooks(response.data);
            })
            .catch(error => {
                console.error('Error fetching books:', error);
            });
    };

    useEffect(() => {
        fetchBooks();
    }, [searchQuery]);

    // Set isAdmin based on your logic (example: check if the user is an admin)
    useEffect(() => {
        // Implement your logic to determine if the user is an admin
        // For example, you might check the user's role in your authentication system
        setIsAdmin();
    }, []);

    return (
        <div>
            <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', textAlign: 'center' }}></div>
            <h1>Welcome to the Library</h1>

            <div style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    placeholder="Search by Title, Author, Subject, or Publish Date"
                    style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginRight: '10px', width: '60%' }}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button onClick={fetchBooks}>Search</button>
                <LibraryTable
                    books={books}
                    onBorrow={(bookId) => handleBorrow(bookId)}
                    onRemove={(bookId) => handleRemove(bookId)}
                    isAdmin={isAdmin}
                />
            </div>
        </div>
    );
}

export default Home;*/
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LibraryTable from './LibraryTable';

function Home() {
    const [books, setBooks] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isAdmin, setIsAdmin] = useState(false); // Add isAdmin state

    const handleBorrow = (bookId) => {
        axios.post('https://lib-2-knbm.onrender.com/borrowBook', { id: bookId })
            .then((response) => {
                if (response.data.success) {
                    alert("successfully borrowed");
                    console.log('Borrowing successful! You have successfully borrowed the book.');
                    fetchBooks();

                } else {
                    console.error('Borrowing failed:', response.data.error);
                }
            })
            .catch((error) => {
                console.error('Error borrowing book:', error);
            });
    };

    const handleRemove = (bookId) => {
        axios.post('https://lib-2-knbm.onrender.com/removeBook', { id: bookId })
            .then((response) => {
                if (response.data.success) {
                    console.log('Removal successful! The book has been removed.');
                    fetchBooks();
                } else {
                    console.error('Removal failed:', response.data.error);
                }
            })
            .catch((error) => {
                console.error('Error removing book:', error);
            });
    };

    const fetchBooks = () => {
        const url = searchQuery
            ? `https://lib-2-knbm.onrender.com/searchBooks?query=${searchQuery}`
            : 'https://lib-2-knbm.onrender.com/getBooks';

        axios.get(url)
            .then(response => {
                setBooks(response.data);
            })
            .catch(error => {
                console.error('Error fetching books:', error);
            });
    };

    useEffect(() => {
        fetchBooks();
    }, [searchQuery]);

    // Set isAdmin based on your logic (example: check if the user is an admin)
    useEffect(() => {
        // Implement your logic to determine if the user is an admin
        // For example, you might check the user's role in your authentication system
        setIsAdmin(/* Your logic to set isAdmin */);
    }, []);

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', textAlign: 'center' }}>
            <h1> Hey user! Welcome to the Library</h1>

            <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <input
                    type="text"
                    placeholder="Search by Title, Author, Subject, or Publish Date"
                    style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginRight: '12px', width: '60%' }}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#FF69B4', color: '#fff' }} onClick={fetchBooks}>Search</button>
            </div>

            <LibraryTable
                books={books}
                onBorrow={(bookId) => handleBorrow(bookId)}
                onRemove={(bookId) => handleRemove(bookId)}
                isAdmin={isAdmin}
            />
        </div>
    );
}

export default Home;
