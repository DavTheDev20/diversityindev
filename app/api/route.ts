// GET:
export async function GET() {
  const data = [
    {
      id: 1,
      msg: "Hello World!",
    },
  ];

  return Response.json(data);
}
