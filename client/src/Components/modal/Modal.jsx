import React from 'react';

function modal() {
    const [isOpen, setIsOpen] = React.useState(true);

    return (
        <div className="flex items-center justify-center min-h-screen backdrop-blur">
            {isOpen && (
                <div className="bg-white rounded-lg shadow-lg p-8 relative w-96 fade-in">
                    <button 
                        className="absolute top-4 right-4 text-xl text-blue-900"
                        onClick={() => setIsOpen(false)}
                    >
                        <i className="fas fa-times"></i>
                    </button>
                    <div className="flex justify-center mb-4">
                        <img src="https://liamcrest.com/assets/static/CONTACT%20US%20IMAGE-N1-01.png" alt="Illustration of people communicating" className="w-full h-auto" />
                    </div>
                    <h2 className="text-2xl font-bold text-center text-blue-900 mb-4">Login</h2>
                    <form>
                        <div className="mb-4">
                            <input type="text" placeholder="Username" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        </div>
                        <div className="mb-4">
                            <input type="password" placeholder="Password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Login</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default modal;
