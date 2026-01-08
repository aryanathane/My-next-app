export interface contactType {
    id?: string;  // Remove optional - IDs should always exist for stored contacts
    name?: string;  // Remove optional - require a name
    email?: string;  // Keep optional
    userId?: string;  // Remove optional and undefined - should always have a userId
}