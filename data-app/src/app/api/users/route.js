let users = [
  { id: 1, name: "Roushan", department: "IT" },
  { id: 2, name: "Rahul", department: "HR" },
];

export async function GET() {
  return Response.json(users);
}

export async function POST(request) {
  const data = await request.json();

  users.push({
    id: Date.now(),
    ...data,
  });

  return Response.json(users);
}

export async function PUT(request) {
  const data = await request.json();

  users = users.map((user) => (user.id === data.id ? data : user));

  return Response.json(users);
}

export async function DELETE(request) {
  const data = await request.json();

  users = users.filter((user) => user.id !== data.id);

  return Response.json(users);
}