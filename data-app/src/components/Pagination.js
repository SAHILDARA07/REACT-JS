"use client";

export default function Pagination({ page, setPage, totalPages }) {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      <button
        className="page-btn"
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        Prev
      </button>

      {pages.map((number) => (
        <button
          key={number}
          className={`page-btn ${page === number ? "active-page" : ""}`}
          onClick={() => setPage(number)}
        >
          {number}
        </button>
      ))}

      <button
        className="page-btn"
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
}