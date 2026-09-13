async function testSanity() {
  const query = `count(*[_type == "project"])`;

  try {
    const result = await sanityQuery(query);

    console.log('Sanity connection successful!');
    console.log('Projects:', result);
  } catch (error) {
    console.error('Sanity connection failed:', error);
    }
  }


testSanity();