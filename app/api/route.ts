export async function GET() {
  const data = [
    {
      id: 1,
      name: "Nina Goldfarb",
      age: 24,
      isEmployed: true,
    },
  ];

  return Response.json(data);
}
