const book = [
    {
        id:1,
        bookname: 'pira-kamil',
        author: 'umra-ahmed',
        originalprice: 1500,
        totalprice: 1500,
        increaseprice: function(amount) {
            if (amount <= 0) {
                alert("The amount to increase must be positive.");
                return;
            }
            this.totalprice += amount;
        },
        decreaseprice: function(amount) {
            if (amount <= 0) {
                alert("The amount to decrease must be positive.");
                return;
            }
            if (this.totalprice - amount < this.originalprice) {
                alert("The price is lower than the original price.");
                return;
            }
            this.totalprice -= amount;
        },
        addBook: function(books, id, bookname, author, originalprice) {
            const newbook = {
                id:id,
                bookname: bookname,
                author: author,
                originalprice: originalprice,
                totalprice: originalprice,
                increaseprice: this.increaseprice,
                decreaseprice: this.decreaseprice
            };
            books.push(newbook);
        },
        deletebooks: function(books, bookname) {
            const index = books.findIndex(b => b.bookname === bookname);
            if (index !== -1) {
                books.splice(index, 1);
                console.log(`Book "${bookname}" deleted.`);
            } else {
                console.log(`Book "${bookname}" not found.`);
            }
        },
        editbook:function(book,id){
             book.find((el)=>{
                return el.id===id
            })
        }
    }
];

book[0].editbook(book,'habits')
book[0].addBook(book, 'atomic habits', 'qazi', 1500);
book[0].addBook(book, ' habits', 'qazi', 1500);
book[0].deletebooks(book, 'atomic habits');
console.log(book);
