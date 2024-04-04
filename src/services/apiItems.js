import supabase from "./supabase";

export async function getItems(query) {
  let { data, error } = await supabase.from(query).select("*");

  if (error) {
    console.error(error);
    throw new Error("Item could not be fetched");
  }

  return data;
}

export async function addItem({ item, query }) {
  const { data, error } = await supabase.from(query).insert([item]).select();

  if (error) {
    console.error(error);
    throw new Error("Item could not be added");
  }

  return data;
}

export async function addToWishlist(newItem) {
  const { data, error } = await supabase
    .from("wishlist")
    .insert([newItem])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Item could not be added");
  }

  return data;
}

export async function deleteItems({ itemId, query }) {
  const { error } = await supabase.from(query).delete().eq("id", itemId);

  if (error) {
    console.error(error);
    throw new Error("Item could not be deleted");
  }
}

export async function updateBagItemQuantity(item) {
  const { quantity: itemQuantity, id } = item;

  const { data, error } = await supabase
    .from("bag")
    .update({ ...item, quantity: itemQuantity })
    .eq("id", id)
    .select();

  if (error) {
    console.error(error);
    throw new Error("Item could not be updated");
  }

  return data;
}
