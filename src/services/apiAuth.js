import supabase from "./supabase";

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function signUp({ email, password, name }) {
  let { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function user() {
  const session = await supabase.auth.getSession();
  if (!session?.data?.session) return null;

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return user;
}

// export async function getCurrentUser() {
//   const {
//     data: { user },
//     error,
//   } = await supabase.auth.getUser();

//   if (error) throw new Error(error.message);

//   return user;
// }

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}
