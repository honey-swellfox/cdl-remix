export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
	T extends { [key: string]: unknown },
	K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
	| T
	| {
			[P in keyof T]?: P extends ' $fragmentName' | '__typename'
				? T[P]
				: never;
	  };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
	DateTime: { input: any; output: any };
	Number: { input: any; output: any };
	QueryArgument: { input: any; output: any };
};

export type AssetCriteriaInput = {
	altText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	/** Narrows the query results to only elements that have been archived. */
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	/** Narrows the query results based on the elements’ creation dates. */
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Narrows the query results based on the assets’ files’ last-modified dates. */
	dateModified?: InputMaybe<Scalars['String']['input']>;
	/** Narrows the query results based on the elements’ last-updated dates. */
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Narrows the query results based on whether the elements are enabled in the site they’re being queried in, per the `site` argument. */
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	/** Narrows the query results based on the assets’ filenames. */
	filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Causes the query results to be returned in the order specified by the `id` argument. */
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	/** Narrows the query results based on the folders the assets belong to, per the folders’ IDs. */
	folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	/** Narrows the query results based on the assets’ image heights. */
	height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Narrows the query results based on the elements’ IDs. */
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	/** Causes the query results to be returned in reverse order. */
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	/** Broadens the query results to include assets from any of the subfolders of the folder specified by `folderId`. */
	includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
	/** Narrows the query results based on the assets’ file kinds. */
	kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Sets the limit for paginated results. */
	limit?: InputMaybe<Scalars['Int']['input']>;
	/** Sets the offset for paginated results. */
	offset?: InputMaybe<Scalars['Int']['input']>;
	/** Sets the field the returned elements should be ordered by. */
	orderBy?: InputMaybe<Scalars['String']['input']>;
	/** Determines which site should be selected when querying multi-site elements. */
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	/** Narrows the query results based on a reference string. */
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	/** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	/** Narrows the query results to elements that relate to an asset list defined with this argument. */
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	/** Narrows the query results to elements that relate to a category list defined with this argument. */
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	/** Narrows the query results to elements that relate to an entry list defined with this argument. */
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	/** Narrows the query results to elements that relate to a tag list defined with this argument. */
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	/** Narrows the query results to elements that relate to a use list defined with this argument. */
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	/** Narrows the query results to only elements that match a search query. */
	search?: InputMaybe<Scalars['String']['input']>;
	/** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	/** Narrows the query results based on the unique identifier for an element-site relation. */
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	/** Narrows the query results based on the assets’ file sizes (in bytes). */
	size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Narrows the query results based on the elements’ slugs. */
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Narrows the query results based on the elements’ statuses. */
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Narrows the query results based on the elements’ titles. */
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Narrows the query results to only elements that have been soft-deleted. */
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	/** Narrows the query results based on the elements’ UIDs. */
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Determines whether only elements with unique IDs should be returned by the query. */
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	/** Narrows the query results based on the user the assets were uploaded by, per the user’s ID. */
	uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
	/** Narrows the query results based on the elements’ URIs. */
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Narrows the query results based on the volumes the assets belong to, per the volumes’ handles. */
	volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Narrows the query results based on the volumes the assets belong to, per the volumes’ IDs. */
	volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	/** Narrows the query results based on the assets’ image widths. */
	width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** A list of transform handles to preload. */
	withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** This is the interface implemented by all assets. */
export type AssetInterface = {
	/** Return a number of related elements for a field. */
	_count?: Maybe<Scalars['Int']['output']>;
	/** Whether the element is archived or not. */
	archived?: Maybe<Scalars['Boolean']['output']>;
	/** The date the element was created. */
	dateCreated?: Maybe<Scalars['DateTime']['output']>;
	/** The date the asset file was last modified. */
	dateModified?: Maybe<Scalars['DateTime']['output']>;
	/** The date the element was last updated. */
	dateUpdated?: Maybe<Scalars['DateTime']['output']>;
	/** Whether the element is enabled or not. */
	enabled?: Maybe<Scalars['Boolean']['output']>;
	/** The file extension for the asset file. */
	extension?: Maybe<Scalars['String']['output']>;
	/** The filename of the asset file. */
	filename?: Maybe<Scalars['String']['output']>;
	/** The focal point represented as an array with `x` and `y` keys, or null if it’s not an image. */
	focalPoint?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
	/** The ID of the folder that the asset belongs to. */
	folderId?: Maybe<Scalars['Int']['output']>;
	/** Whether a user-defined focal point is set on the asset. */
	hasFocalPoint?: Maybe<Scalars['Boolean']['output']>;
	/** The height in pixels or null if it’s not an image. */
	height?: Maybe<Scalars['Int']['output']>;
	/** The ID of the entity */
	id?: Maybe<Scalars['ID']['output']>;
	/** An `<img>` tag based on this asset. */
	img?: Maybe<Scalars['String']['output']>;
	/** The file kind. */
	kind?: Maybe<Scalars['String']['output']>;
	/** The language of the site element is associated with. */
	language?: Maybe<Scalars['String']['output']>;
	/** The file’s MIME type, if it can be determined. */
	mimeType?: Maybe<Scalars['String']['output']>;
	/** Returns the next element relative to this one, from a given set of criteria. */
	next?: Maybe<AssetInterface>;
	/** The asset’s path in the volume. */
	path?: Maybe<Scalars['String']['output']>;
	/** Returns the previous element relative to this one, from a given set of criteria. */
	prev?: Maybe<AssetInterface>;
	/** The element’s search score, if the `search` parameter was used when querying for the element. */
	searchScore?: Maybe<Scalars['String']['output']>;
	/** The ID of the site the element is associated with. */
	siteId?: Maybe<Scalars['Int']['output']>;
	/** The unique identifier for an element-site relation. */
	siteSettingsId?: Maybe<Scalars['ID']['output']>;
	/** The file size in bytes. */
	size?: Maybe<Scalars['String']['output']>;
	/** The element’s slug. */
	slug?: Maybe<Scalars['String']['output']>;
	/** Returns a `srcset` attribute value based on the given widths or x-descriptors. */
	srcset?: Maybe<Scalars['String']['output']>;
	/** The element’s status. */
	status?: Maybe<Scalars['String']['output']>;
	/** The element’s title. */
	title?: Maybe<Scalars['String']['output']>;
	/** Whether the element has been soft-deleted or not. */
	trashed?: Maybe<Scalars['Boolean']['output']>;
	/** The UID of the entity */
	uid?: Maybe<Scalars['String']['output']>;
	/** The user who first added this asset (if known). */
	uploader?: Maybe<UserInterface>;
	/** The ID of the user who first added this asset (if known). */
	uploaderId?: Maybe<Scalars['Int']['output']>;
	/** The element’s URI. */
	uri?: Maybe<Scalars['String']['output']>;
	/** The full URL of the asset. This field accepts the same fields as the `transform` directive. */
	url?: Maybe<Scalars['String']['output']>;
	/** The ID of the volume that the asset belongs to. */
	volumeId?: Maybe<Scalars['Int']['output']>;
	/** The width in pixels or null if it’s not an image. */
	width?: Maybe<Scalars['Int']['output']>;
};

/** This is the interface implemented by all assets. */
export type AssetInterface_CountArgs = {
	field: Scalars['String']['input'];
};

/** This is the interface implemented by all assets. */
export type AssetInterfaceHeightArgs = {
	format?: InputMaybe<Scalars['String']['input']>;
	handle?: InputMaybe<Scalars['String']['input']>;
	height?: InputMaybe<Scalars['Int']['input']>;
	immediately?: InputMaybe<Scalars['Boolean']['input']>;
	interlace?: InputMaybe<Scalars['String']['input']>;
	mode?: InputMaybe<Scalars['String']['input']>;
	position?: InputMaybe<Scalars['String']['input']>;
	quality?: InputMaybe<Scalars['Int']['input']>;
	transform?: InputMaybe<Scalars['String']['input']>;
	width?: InputMaybe<Scalars['Int']['input']>;
};

/** This is the interface implemented by all assets. */
export type AssetInterfaceNextArgs = {
	altText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateModified?: InputMaybe<Scalars['String']['input']>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
	kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** This is the interface implemented by all assets. */
export type AssetInterfacePrevArgs = {
	altText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateModified?: InputMaybe<Scalars['String']['input']>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
	kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** This is the interface implemented by all assets. */
export type AssetInterfaceSrcsetArgs = {
	sizes: Array<Scalars['String']['input']>;
};

/** This is the interface implemented by all assets. */
export type AssetInterfaceUploaderArgs = {
	applicationType?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateOfBirth?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	email?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	firstName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	group?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	hasPhoto?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	inviteType?: InputMaybe<Scalars['Boolean']['input']>;
	lastName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	licenseOrPermitNumber?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	snipcartCustomerId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	username?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** This is the interface implemented by all assets. */
export type AssetInterfaceUrlArgs = {
	format?: InputMaybe<Scalars['String']['input']>;
	handle?: InputMaybe<Scalars['String']['input']>;
	height?: InputMaybe<Scalars['Int']['input']>;
	immediately?: InputMaybe<Scalars['Boolean']['input']>;
	interlace?: InputMaybe<Scalars['String']['input']>;
	mode?: InputMaybe<Scalars['String']['input']>;
	position?: InputMaybe<Scalars['String']['input']>;
	quality?: InputMaybe<Scalars['Int']['input']>;
	transform?: InputMaybe<Scalars['String']['input']>;
	width?: InputMaybe<Scalars['Int']['input']>;
};

/** This is the interface implemented by all assets. */
export type AssetInterfaceWidthArgs = {
	format?: InputMaybe<Scalars['String']['input']>;
	handle?: InputMaybe<Scalars['String']['input']>;
	height?: InputMaybe<Scalars['Int']['input']>;
	immediately?: InputMaybe<Scalars['Boolean']['input']>;
	interlace?: InputMaybe<Scalars['String']['input']>;
	mode?: InputMaybe<Scalars['String']['input']>;
	position?: InputMaybe<Scalars['String']['input']>;
	quality?: InputMaybe<Scalars['Int']['input']>;
	transform?: InputMaybe<Scalars['String']['input']>;
	width?: InputMaybe<Scalars['Int']['input']>;
};

export type CategoryCriteriaInput = {
	/** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `ancestorOf`. */
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	/** Narrows the query results to only elements that are ancestors of another element in its structure, provided by its ID. */
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	/** Narrows the query results to only elements that have been archived. */
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	/** Narrows the query results based on the elements’ creation dates. */
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Narrows the query results based on the elements’ last-updated dates. */
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `descendantOf`. */
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	/** Narrows the query results to only elements that are descendants of another element in its structure provided by its ID. */
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	/** Whether to only return categories that the user has permission to edit. */
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	/** Narrows the query results based on whether the elements are enabled in the site they’re being queried in, per the `site` argument. */
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	/** Causes the query results to be returned in the order specified by the `id` argument. */
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	/** Narrows the query results based on the category groups the categories belong to per the group’s handles. */
	group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Narrows the query results based on the category groups the categories belong to, per the groups’ IDs. */
	groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	/** Narrows the query results based on whether the elements have any descendants in their structure. */
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	/** Narrows the query results based on the elements’ IDs. */
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	/** Causes the query results to be returned in reverse order. */
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	/** Narrows the query results based on whether the elements are “leaves” in their structure (element with no descendants). */
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	/** Narrows the query results based on the elements’ level within the structure. */
	level?: InputMaybe<Scalars['Int']['input']>;
	/** Sets the limit for paginated results. */
	limit?: InputMaybe<Scalars['Int']['input']>;
	/** Narrows the query results to only the entry that comes immediately after another element in its structure, provided by its ID. */
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	/** Sets the offset for paginated results. */
	offset?: InputMaybe<Scalars['Int']['input']>;
	/** Sets the field the returned elements should be ordered by. */
	orderBy?: InputMaybe<Scalars['String']['input']>;
	/** Narrows the query results to only entries that are positioned after another element in its structure, provided by its ID. */
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	/** Narrows the query results to only entries that are positioned before another element in its structure, provided by its ID. */
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	/** Determines which site should be selected when querying multi-site elements. */
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	/** Narrows the query results to only the entry that comes immediately before another element in its structure, provided by its ID. */
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	/** Narrows the query results based on a reference string. */
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	/** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	/** Narrows the query results to elements that relate to an asset list defined with this argument. */
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	/** Narrows the query results to elements that relate to a category list defined with this argument. */
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	/** Narrows the query results to elements that relate to an entry list defined with this argument. */
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	/** Narrows the query results to elements that relate to a tag list defined with this argument. */
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	/** Narrows the query results to elements that relate to a use list defined with this argument. */
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	/** Narrows the query results to only elements that match a search query. */
	search?: InputMaybe<Scalars['String']['input']>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	/** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	/** Narrows the query results based on the unique identifier for an element-site relation. */
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	/** Narrows the query results based on the elements’ slugs. */
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Narrows the query results based on the elements’ statuses. */
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Determines which structure data should be joined into the query. */
	structureId?: InputMaybe<Scalars['Int']['input']>;
	/** Narrows the query results based on the elements’ titles. */
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Narrows the query results to only elements that have been soft-deleted. */
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	/** Narrows the query results based on the elements’ UIDs. */
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Determines whether only elements with unique IDs should be returned by the query. */
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	/** Narrows the query results based on the elements’ URIs. */
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Explicitly determines whether the query should join in the structure data. */
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

/** This is the interface implemented by all categories. */
export type CategoryInterface = {
	/** Return a number of related elements for a field. */
	_count?: Maybe<Scalars['Int']['output']>;
	/** Whether the element is archived or not. */
	archived?: Maybe<Scalars['Boolean']['output']>;
	/** The category’s children. */
	children?: Maybe<Array<Maybe<CategoryInterface>>>;
	/** The date the element was created. */
	dateCreated?: Maybe<Scalars['DateTime']['output']>;
	/** The date the element was last updated. */
	dateUpdated?: Maybe<Scalars['DateTime']['output']>;
	/** Whether the element is enabled or not. */
	enabled?: Maybe<Scalars['Boolean']['output']>;
	/** The handle of the group that contains the category. */
	groupHandle?: Maybe<Scalars['String']['output']>;
	/** The ID of the group that contains the category. */
	groupId?: Maybe<Scalars['Int']['output']>;
	/** The ID of the entity */
	id?: Maybe<Scalars['ID']['output']>;
	/** The language of the site element is associated with. */
	language?: Maybe<Scalars['String']['output']>;
	/** The element’s level within its structure */
	level?: Maybe<Scalars['Int']['output']>;
	/** The element’s left position within its structure. */
	lft?: Maybe<Scalars['Int']['output']>;
	/** The same element in other locales. */
	localized?: Maybe<Array<Maybe<CategoryInterface>>>;
	/** Returns the next element relative to this one, from a given set of criteria. */
	next?: Maybe<CategoryInterface>;
	/** The category’s parent. */
	parent?: Maybe<CategoryInterface>;
	/** Returns the previous element relative to this one, from a given set of criteria. */
	prev?: Maybe<CategoryInterface>;
	/** The element’s right position within its structure. */
	rgt?: Maybe<Scalars['Int']['output']>;
	/** The element’s structure’s root ID */
	root?: Maybe<Scalars['Int']['output']>;
	/** The element’s search score, if the `search` parameter was used when querying for the element. */
	searchScore?: Maybe<Scalars['String']['output']>;
	/** This query is used to query for SEOmatic meta data. */
	seomatic?: Maybe<SeomaticInterface>;
	/** The ID of the site the element is associated with. */
	siteId?: Maybe<Scalars['Int']['output']>;
	/** The unique identifier for an element-site relation. */
	siteSettingsId?: Maybe<Scalars['ID']['output']>;
	/** The element’s slug. */
	slug?: Maybe<Scalars['String']['output']>;
	/** The element’s status. */
	status?: Maybe<Scalars['String']['output']>;
	/** The element’s structure ID. */
	structureId?: Maybe<Scalars['Int']['output']>;
	/** The element’s title. */
	title?: Maybe<Scalars['String']['output']>;
	/** Whether the element has been soft-deleted or not. */
	trashed?: Maybe<Scalars['Boolean']['output']>;
	/** The UID of the entity */
	uid?: Maybe<Scalars['String']['output']>;
	/** The element’s URI. */
	uri?: Maybe<Scalars['String']['output']>;
	/** The element’s full URL */
	url?: Maybe<Scalars['String']['output']>;
};

/** This is the interface implemented by all categories. */
export type CategoryInterface_CountArgs = {
	field: Scalars['String']['input'];
};

/** This is the interface implemented by all categories. */
export type CategoryInterfaceChildrenArgs = {
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

/** This is the interface implemented by all categories. */
export type CategoryInterfaceLocalizedArgs = {
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

/** This is the interface implemented by all categories. */
export type CategoryInterfaceNextArgs = {
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

/** This is the interface implemented by all categories. */
export type CategoryInterfaceParentArgs = {
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

/** This is the interface implemented by all categories. */
export type CategoryInterfacePrevArgs = {
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

/** This is the interface implemented by all categories. */
export type CategoryInterfaceSeomaticArgs = {
	asArray?: InputMaybe<Scalars['Boolean']['input']>;
	environment?: InputMaybe<SeomaticEnvironment>;
	site?: InputMaybe<Scalars['String']['input']>;
	siteId?: InputMaybe<Scalars['Int']['input']>;
	uri?: InputMaybe<Scalars['String']['input']>;
};

/** This is the interface implemented by all course invites. */
export type CourseInviteInterface = {
	/** Return a number of related elements for a field. */
	_count?: Maybe<Scalars['Int']['output']>;
	/** Whether the element is archived or not. */
	archived?: Maybe<Scalars['Boolean']['output']>;
	/** The ID of the entry that user is enrolled to. */
	courseId?: Maybe<Scalars['Int']['output']>;
	/** The date the element was created. */
	dateCreated?: Maybe<Scalars['DateTime']['output']>;
	/** The date the element was last updated. */
	dateUpdated?: Maybe<Scalars['DateTime']['output']>;
	/** Course invite email. */
	email?: Maybe<Scalars['String']['output']>;
	/** Whether the element is enabled or not. */
	enabled?: Maybe<Scalars['Boolean']['output']>;
	/** Course invite user first name. */
	firstName?: Maybe<Scalars['String']['output']>;
	/** The ID of the entity */
	id?: Maybe<Scalars['ID']['output']>;
	/** The ID of the instructor. */
	instructorId?: Maybe<Scalars['Int']['output']>;
	/** Course invite status. */
	inviteStatus?: Maybe<Scalars['String']['output']>;
	/** The language of the site element is associated with. */
	language?: Maybe<Scalars['String']['output']>;
	/** Course invite user last name. */
	lastName?: Maybe<Scalars['String']['output']>;
	/** The element’s search score, if the `search` parameter was used when querying for the element. */
	searchScore?: Maybe<Scalars['String']['output']>;
	/** The ID of the site the element is associated with. */
	siteId?: Maybe<Scalars['Int']['output']>;
	/** The unique identifier for an element-site relation. */
	siteSettingsId?: Maybe<Scalars['ID']['output']>;
	/** The element’s slug. */
	slug?: Maybe<Scalars['String']['output']>;
	/** The element’s status. */
	status?: Maybe<Scalars['String']['output']>;
	/** The element’s title. */
	title?: Maybe<Scalars['String']['output']>;
	/** Whether the element has been soft-deleted or not. */
	trashed?: Maybe<Scalars['Boolean']['output']>;
	/** The UID of the entity */
	uid?: Maybe<Scalars['String']['output']>;
	/** The element’s URI. */
	uri?: Maybe<Scalars['String']['output']>;
	/** Course invite user ID. */
	userId?: Maybe<Scalars['Int']['output']>;
	/** Course invite username. */
	username?: Maybe<Scalars['String']['output']>;
};

/** This is the interface implemented by all course invites. */
export type CourseInviteInterface_CountArgs = {
	field: Scalars['String']['input'];
};

export type Element = ElementInterface & {
	/** Return a number of related elements for a field. */
	_count?: Maybe<Scalars['Int']['output']>;
	/** Whether the element is archived or not. */
	archived?: Maybe<Scalars['Boolean']['output']>;
	/** The date the element was created. */
	dateCreated?: Maybe<Scalars['DateTime']['output']>;
	/** The date the element was last updated. */
	dateUpdated?: Maybe<Scalars['DateTime']['output']>;
	/** Whether the element is enabled or not. */
	enabled?: Maybe<Scalars['Boolean']['output']>;
	/** The ID of the entity */
	id?: Maybe<Scalars['ID']['output']>;
	/** The language of the site element is associated with. */
	language?: Maybe<Scalars['String']['output']>;
	/** The element’s search score, if the `search` parameter was used when querying for the element. */
	searchScore?: Maybe<Scalars['String']['output']>;
	/** The ID of the site the element is associated with. */
	siteId?: Maybe<Scalars['Int']['output']>;
	/** The unique identifier for an element-site relation. */
	siteSettingsId?: Maybe<Scalars['ID']['output']>;
	/** The element’s slug. */
	slug?: Maybe<Scalars['String']['output']>;
	/** The element’s status. */
	status?: Maybe<Scalars['String']['output']>;
	/** The element’s title. */
	title?: Maybe<Scalars['String']['output']>;
	/** Whether the element has been soft-deleted or not. */
	trashed?: Maybe<Scalars['Boolean']['output']>;
	/** The UID of the entity */
	uid?: Maybe<Scalars['String']['output']>;
	/** The element’s URI. */
	uri?: Maybe<Scalars['String']['output']>;
};

export type Element_CountArgs = {
	field: Scalars['String']['input'];
};

/** This is the interface implemented by all elements. */
export type ElementInterface = {
	/** Return a number of related elements for a field. */
	_count?: Maybe<Scalars['Int']['output']>;
	/** Whether the element is archived or not. */
	archived?: Maybe<Scalars['Boolean']['output']>;
	/** The date the element was created. */
	dateCreated?: Maybe<Scalars['DateTime']['output']>;
	/** The date the element was last updated. */
	dateUpdated?: Maybe<Scalars['DateTime']['output']>;
	/** Whether the element is enabled or not. */
	enabled?: Maybe<Scalars['Boolean']['output']>;
	/** The ID of the entity */
	id?: Maybe<Scalars['ID']['output']>;
	/** The language of the site element is associated with. */
	language?: Maybe<Scalars['String']['output']>;
	/** The element’s search score, if the `search` parameter was used when querying for the element. */
	searchScore?: Maybe<Scalars['String']['output']>;
	/** The ID of the site the element is associated with. */
	siteId?: Maybe<Scalars['Int']['output']>;
	/** The unique identifier for an element-site relation. */
	siteSettingsId?: Maybe<Scalars['ID']['output']>;
	/** The element’s slug. */
	slug?: Maybe<Scalars['String']['output']>;
	/** The element’s status. */
	status?: Maybe<Scalars['String']['output']>;
	/** The element’s title. */
	title?: Maybe<Scalars['String']['output']>;
	/** Whether the element has been soft-deleted or not. */
	trashed?: Maybe<Scalars['Boolean']['output']>;
	/** The UID of the entity */
	uid?: Maybe<Scalars['String']['output']>;
	/** The element’s URI. */
	uri?: Maybe<Scalars['String']['output']>;
};

/** This is the interface implemented by all elements. */
export type ElementInterface_CountArgs = {
	field: Scalars['String']['input'];
};

export type EntryCriteriaInput = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	/** Narrows the query results to only entries that were posted on or after a certain date. */
	after?: InputMaybe<Scalars['String']['input']>;
	/** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `ancestorOf`. */
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	/** Narrows the query results to only elements that are ancestors of another element in its structure, provided by its ID. */
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	/** Narrows the query results to only elements that have been archived. */
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	/** Narrows the query results based on the user group the entries’ authors belong to. */
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Narrows the query results based on the user group the entries’ authors belong to, per the groups’ IDs. */
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	/** Narrows the query results based on the entries’ authors. */
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	/** Narrows the query results to only entries that were posted before a certain date. */
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	/** Narrows the query results based on the elements’ creation dates. */
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Narrows the query results based on the elements’ last-updated dates. */
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `descendantOf`. */
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	/** Narrows the query results to only elements that are descendants of another element in its structure provided by its ID. */
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	/** The drafts’ creator ID */
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	/** The ID of the draft to return (from the `drafts` table) */
	draftId?: InputMaybe<Scalars['Int']['input']>;
	/** Narrows the query results to only drafts of a given element.  Set to `false` to fetch unpublished drafts. */
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	/** Whether draft elements should be returned. */
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	/** Whether to only return entries that the user has permission to edit. */
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	/** Narrows the query results based on whether the elements are enabled in the site they’re being queried in, per the `site` argument. */
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	/** Narrows the query results based on the entries’ expiry dates. */
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Causes the query results to be returned in the order specified by the `id` argument. */
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	/** Narrows the query results based on whether the elements have any descendants in their structure. */
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	/** Narrows the query results based on the elements’ IDs. */
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	/** Causes the query results to be returned in reverse order. */
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	/** Narrows the query results based on whether the elements are “leaves” in their structure (element with no descendants). */
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	/** Narrows the query results based on the elements’ level within the structure. */
	level?: InputMaybe<Scalars['Int']['input']>;
	/** Sets the limit for paginated results. */
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	/** Narrows the query results to only the entry that comes immediately after another element in its structure, provided by its ID. */
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	/** Sets the offset for paginated results. */
	offset?: InputMaybe<Scalars['Int']['input']>;
	/** Sets the field the returned elements should be ordered by. */
	orderBy?: InputMaybe<Scalars['String']['input']>;
	/** Narrows the query results to only entries that are positioned after another element in its structure, provided by its ID. */
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	/** Narrows the query results to only entries that are positioned before another element in its structure, provided by its ID. */
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	/** Narrows the query results based on the entries’ post dates. */
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Determines which site should be selected when querying multi-site elements. */
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	/** Narrows the query results to only the entry that comes immediately before another element in its structure, provided by its ID. */
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	/** Whether provisional drafts should be returned. */
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	/** Narrows the query results based on a reference string. */
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	/** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	/** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	/** Narrows the query results to elements that relate to an asset list defined with this argument. */
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	/** Narrows the query results to elements that relate to a category list defined with this argument. */
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	/** Narrows the query results to elements that relate to an entry list defined with this argument. */
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	/** Narrows the query results to elements that relate to a tag list defined with this argument. */
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	/** Narrows the query results to elements that relate to a use list defined with this argument. */
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	/** The revisions’ creator ID */
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	/** The ID of the revision to return (from the `revisions` table) */
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	/** The source element ID that revisions should be returned for */
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	/** Whether revision elements should be returned. */
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	/** Narrows the query results to only elements that match a search query. */
	search?: InputMaybe<Scalars['String']['input']>;
	/** Narrows the query results based on the section handles the entries belong to. */
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Narrows the query results based on the sections the entries belong to, per the sections’ IDs. */
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	/** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	/** Narrows the query results based on the unique identifier for an element-site relation. */
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	/** Narrows the query results based on the elements’ slugs. */
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	/** Narrows the query results based on the elements’ statuses. */
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Determines which structure data should be joined into the query. */
	structureId?: InputMaybe<Scalars['Int']['input']>;
	/** Narrows the query results based on the elements’ titles. */
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Narrows the query results to only elements that have been soft-deleted. */
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	/** Narrows the query results based on the entries’ entry type handles. */
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Narrows the query results based on the entries’ entry types, per the types’ IDs. */
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	/** Narrows the query results based on the elements’ UIDs. */
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Determines whether only elements with unique IDs should be returned by the query. */
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	/** Narrows the query results based on the elements’ URIs. */
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Explicitly determines whether the query should join in the structure data. */
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

/** This is the interface implemented by all entries. */
export type EntryInterface = {
	/** Return a number of related elements for a field. */
	_count?: Maybe<Scalars['Int']['output']>;
	/** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
	ancestors?: Maybe<Array<Maybe<EntryInterface>>>;
	/** Whether the element is archived or not. */
	archived?: Maybe<Scalars['Boolean']['output']>;
	/** The entry’s author. */
	author?: Maybe<UserInterface>;
	/** The ID of the author of this entry. */
	authorId?: Maybe<Scalars['Int']['output']>;
	/** Returns the entry’s canonical ID. */
	canonicalId?: Maybe<Scalars['Int']['output']>;
	/** Returns the entry’s canonical UUID. */
	canonicalUid?: Maybe<Scalars['String']['output']>;
	/** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
	children?: Maybe<Array<Maybe<EntryInterface>>>;
	/** The current revision for the entry. */
	currentRevision?: Maybe<EntryInterface>;
	/** The date the element was created. */
	dateCreated?: Maybe<Scalars['DateTime']['output']>;
	/** The date the element was last updated. */
	dateUpdated?: Maybe<Scalars['DateTime']['output']>;
	/** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
	descendants?: Maybe<Array<Maybe<EntryInterface>>>;
	/** The creator of a given draft. */
	draftCreator?: Maybe<UserInterface>;
	/** The draft ID (from the `drafts` table). */
	draftId?: Maybe<Scalars['Int']['output']>;
	/** The name of the draft. */
	draftName?: Maybe<Scalars['String']['output']>;
	/** The notes for the draft. */
	draftNotes?: Maybe<Scalars['String']['output']>;
	/** The drafts for the entry. */
	drafts?: Maybe<Array<Maybe<EntryInterface>>>;
	/** Whether the element is enabled or not. */
	enabled?: Maybe<Scalars['Boolean']['output']>;
	/** The expiry date of the entry. */
	expiryDate?: Maybe<Scalars['DateTime']['output']>;
	/** The ID of the entity */
	id?: Maybe<Scalars['ID']['output']>;
	/** Returns whether this is a draft. */
	isDraft?: Maybe<Scalars['Boolean']['output']>;
	/** Returns whether this is a revision. */
	isRevision?: Maybe<Scalars['Boolean']['output']>;
	/** Returns whether this is an unpublished draft. */
	isUnpublishedDraft?: Maybe<Scalars['Boolean']['output']>;
	/** Returns whether this is an unpublished draft. **This field is deprecated.** `isUnpublishedDraft` should be used instead. */
	isUnsavedDraft?: Maybe<Scalars['Boolean']['output']>;
	/** The language of the site element is associated with. */
	language?: Maybe<Scalars['String']['output']>;
	/** The element’s level within its structure */
	level?: Maybe<Scalars['Int']['output']>;
	/** The element’s left position within its structure. */
	lft?: Maybe<Scalars['Int']['output']>;
	/** The same element in other locales. */
	localized?: Maybe<Array<Maybe<EntryInterface>>>;
	/** Returns the next element relative to this one, from a given set of criteria. */
	next?: Maybe<EntryInterface>;
	/** The entry’s parent, if the section is a structure. */
	parent?: Maybe<EntryInterface>;
	/** The entry’s post date. */
	postDate?: Maybe<Scalars['DateTime']['output']>;
	/** Returns the previous element relative to this one, from a given set of criteria. */
	prev?: Maybe<EntryInterface>;
	/** The creator of a given revision. */
	revisionCreator?: Maybe<UserInterface>;
	/** The revision ID (from the `revisions` table). */
	revisionId?: Maybe<Scalars['Int']['output']>;
	/** The revision notes (from the `revisions` table). */
	revisionNotes?: Maybe<Scalars['String']['output']>;
	/** The revisions for the entry. */
	revisions?: Maybe<Array<Maybe<EntryInterface>>>;
	/** The element’s right position within its structure. */
	rgt?: Maybe<Scalars['Int']['output']>;
	/** The element’s structure’s root ID */
	root?: Maybe<Scalars['Int']['output']>;
	/** The element’s search score, if the `search` parameter was used when querying for the element. */
	searchScore?: Maybe<Scalars['String']['output']>;
	/** The handle of the section that contains the entry. */
	sectionHandle?: Maybe<Scalars['String']['output']>;
	/** The ID of the section that contains the entry. */
	sectionId?: Maybe<Scalars['Int']['output']>;
	/** This query is used to query for SEOmatic meta data. */
	seomatic?: Maybe<SeomaticInterface>;
	/** The ID of the site the element is associated with. */
	siteId?: Maybe<Scalars['Int']['output']>;
	/** The unique identifier for an element-site relation. */
	siteSettingsId?: Maybe<Scalars['ID']['output']>;
	/** The element’s slug. */
	slug?: Maybe<Scalars['String']['output']>;
	/**
	 * Returns the entry’s canonical ID.
	 * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
	 */
	sourceId?: Maybe<Scalars['Int']['output']>;
	/**
	 * Returns the entry’s canonical UUID.
	 * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
	 */
	sourceUid?: Maybe<Scalars['String']['output']>;
	/** The element’s status. */
	status?: Maybe<Scalars['String']['output']>;
	/** The element’s structure ID. */
	structureId?: Maybe<Scalars['Int']['output']>;
	/** The element’s title. */
	title?: Maybe<Scalars['String']['output']>;
	/** Whether the element has been soft-deleted or not. */
	trashed?: Maybe<Scalars['Boolean']['output']>;
	/** The handle of the entry type that contains the entry. */
	typeHandle?: Maybe<Scalars['String']['output']>;
	/** The ID of the entry type that contains the entry. */
	typeId?: Maybe<Scalars['Int']['output']>;
	/** The UID of the entity */
	uid?: Maybe<Scalars['String']['output']>;
	/** The element’s URI. */
	uri?: Maybe<Scalars['String']['output']>;
	/** The element’s full URL */
	url?: Maybe<Scalars['String']['output']>;
};

/** This is the interface implemented by all entries. */
export type EntryInterface_CountArgs = {
	field: Scalars['String']['input'];
};

/** This is the interface implemented by all entries. */
export type EntryInterfaceAncestorsArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

/** This is the interface implemented by all entries. */
export type EntryInterfaceChildrenArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

/** This is the interface implemented by all entries. */
export type EntryInterfaceDescendantsArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

/** This is the interface implemented by all entries. */
export type EntryInterfaceDraftsArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

/** This is the interface implemented by all entries. */
export type EntryInterfaceLocalizedArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

/** This is the interface implemented by all entries. */
export type EntryInterfaceNextArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

/** This is the interface implemented by all entries. */
export type EntryInterfaceParentArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

/** This is the interface implemented by all entries. */
export type EntryInterfacePrevArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

/** This is the interface implemented by all entries. */
export type EntryInterfaceRevisionsArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

/** This is the interface implemented by all entries. */
export type EntryInterfaceSeomaticArgs = {
	asArray?: InputMaybe<Scalars['Boolean']['input']>;
	environment?: InputMaybe<SeomaticEnvironment>;
	site?: InputMaybe<Scalars['String']['input']>;
	siteId?: InputMaybe<Scalars['Int']['input']>;
	uri?: InputMaybe<Scalars['String']['input']>;
};

/** Contents of a file */
export type FileContents = {
	contents?: Maybe<Scalars['String']['output']>;
	filename: Scalars['String']['output'];
};

/** This is the interface implemented by all matrix blocks. */
export type MatrixBlockInterface = {
	/** Return a number of related elements for a field. */
	_count?: Maybe<Scalars['Int']['output']>;
	/** Whether the element is archived or not. */
	archived?: Maybe<Scalars['Boolean']['output']>;
	/** The date the element was created. */
	dateCreated?: Maybe<Scalars['DateTime']['output']>;
	/** The date the element was last updated. */
	dateUpdated?: Maybe<Scalars['DateTime']['output']>;
	/** Whether the element is enabled or not. */
	enabled?: Maybe<Scalars['Boolean']['output']>;
	/** The ID of the field that owns the matrix block. */
	fieldId?: Maybe<Scalars['Int']['output']>;
	/** The ID of the entity */
	id?: Maybe<Scalars['ID']['output']>;
	/** The language of the site element is associated with. */
	language?: Maybe<Scalars['String']['output']>;
	/** The ID of the element that owns the matrix block. */
	ownerId?: Maybe<Scalars['Int']['output']>;
	/** The element’s search score, if the `search` parameter was used when querying for the element. */
	searchScore?: Maybe<Scalars['String']['output']>;
	/** The ID of the site the element is associated with. */
	siteId?: Maybe<Scalars['Int']['output']>;
	/** The unique identifier for an element-site relation. */
	siteSettingsId?: Maybe<Scalars['ID']['output']>;
	/** The element’s slug. */
	slug?: Maybe<Scalars['String']['output']>;
	/** The sort order of the matrix block within the owner element field. */
	sortOrder?: Maybe<Scalars['Int']['output']>;
	/** The element’s status. */
	status?: Maybe<Scalars['String']['output']>;
	/** The element’s title. */
	title?: Maybe<Scalars['String']['output']>;
	/** Whether the element has been soft-deleted or not. */
	trashed?: Maybe<Scalars['Boolean']['output']>;
	/** The handle of the matrix block’s type. */
	typeHandle?: Maybe<Scalars['String']['output']>;
	/** The ID of the matrix block’s type. */
	typeId?: Maybe<Scalars['Int']['output']>;
	/** The UID of the entity */
	uid?: Maybe<Scalars['String']['output']>;
	/** The element’s URI. */
	uri?: Maybe<Scalars['String']['output']>;
};

/** This is the interface implemented by all matrix blocks. */
export type MatrixBlockInterface_CountArgs = {
	field: Scalars['String']['input'];
};

export type Mutation = {
	ping?: Maybe<Scalars['String']['output']>;
};

export type Query = {
	/** This query is used to query for a single asset. */
	asset?: Maybe<AssetInterface>;
	/** This query is used to return the number of assets. */
	assetCount: Scalars['Int']['output'];
	/** This query is used to query for assets. */
	assets?: Maybe<Array<Maybe<AssetInterface>>>;
	/** This query is used to query for categories. */
	categories?: Maybe<Array<Maybe<CategoryInterface>>>;
	/** This query is used to query for a single category. */
	category?: Maybe<CategoryInterface>;
	/** This query is used to return the number of categories. */
	categoryCount: Scalars['Int']['output'];
	/** This query is used to query for a course invite. */
	courseInvite?: Maybe<CourseInviteInterface>;
	/** This query is used to query for course invites. */
	courseInvites?: Maybe<Array<Maybe<CourseInviteInterface>>>;
	/** This query is used to query for entries. */
	entries?: Maybe<Array<Maybe<EntryInterface>>>;
	/** This query is used to query for a single entry. */
	entry?: Maybe<EntryInterface>;
	/** This query is used to return the number of entries. */
	entryCount: Scalars['Int']['output'];
	ping?: Maybe<Scalars['String']['output']>;
	/** This query is used to query for SEOmatic meta data. */
	seomatic?: Maybe<SeomaticInterface>;
	/** This query is used to query for a training. */
	training?: Maybe<TrainingInterface>;
	/** This query is used to query for trainings. */
	trainings?: Maybe<Array<Maybe<TrainingInterface>>>;
	/** This query is used to query for a single user. */
	user?: Maybe<UserInterface>;
	/** This query is used to return the number of users. */
	userCount: Scalars['Int']['output'];
	/** This query is used to query for users. */
	users?: Maybe<Array<Maybe<UserInterface>>>;
};

export type QueryAssetArgs = {
	altText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateModified?: InputMaybe<Scalars['String']['input']>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
	kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryAssetCountArgs = {
	altText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateModified?: InputMaybe<Scalars['String']['input']>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
	kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryAssetsArgs = {
	altText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateModified?: InputMaybe<Scalars['String']['input']>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
	kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryCategoriesArgs = {
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryCategoryArgs = {
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryCategoryCountArgs = {
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryCourseInviteArgs = {
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	courseId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	instructorId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	inviteStatus?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	username?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
};

export type QueryCourseInvitesArgs = {
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	courseId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	instructorId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	inviteStatus?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	username?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
};

export type QueryEntriesArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryEntryArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryEntryCountArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QuerySeomaticArgs = {
	asArray?: InputMaybe<Scalars['Boolean']['input']>;
	environment?: InputMaybe<SeomaticEnvironment>;
	site?: InputMaybe<Scalars['String']['input']>;
	siteId?: InputMaybe<Scalars['Int']['input']>;
	uri?: InputMaybe<Scalars['String']['input']>;
};

export type QueryTrainingArgs = {
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	completed?: InputMaybe<Scalars['Boolean']['input']>;
	completedDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	courseId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	fmcsaStutus?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	instructorId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	purchaseDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	userId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
};

export type QueryTrainingsArgs = {
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	completed?: InputMaybe<Scalars['Boolean']['input']>;
	completedDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	courseId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	fmcsaStutus?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	instructorId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	purchaseDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	userId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
};

export type QueryUserArgs = {
	applicationType?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateOfBirth?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	email?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	firstName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	group?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	hasPhoto?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	inviteType?: InputMaybe<Scalars['Boolean']['input']>;
	lastName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	licenseOrPermitNumber?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	snipcartCustomerId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	username?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryUserCountArgs = {
	applicationType?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateOfBirth?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	email?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	firstName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	group?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	hasPhoto?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	inviteType?: InputMaybe<Scalars['Boolean']['input']>;
	lastName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	licenseOrPermitNumber?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	snipcartCustomerId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	username?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryUsersArgs = {
	applicationType?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateOfBirth?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	email?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	firstName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	group?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	hasPhoto?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	inviteType?: InputMaybe<Scalars['Boolean']['input']>;
	lastName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	licenseOrPermitNumber?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	snipcartCustomerId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	username?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Optional - The SEOmatic environment that should be used */
export enum SeomaticEnvironment {
	/** Live production environment, with indexing enabled */
	Live = 'live',
	/** Local Development environment, with debugging enabled and indexing disabled */
	Local = 'local',
	/** Staging environment, with indexing disabled */
	Staging = 'staging',
}

export enum SeomaticFrontendTemplate {
	/** The ads.txt file */
	Ads = 'ads',
	/** The humans.txt file */
	Humans = 'humans',
	/** The robots.txt file */
	Robots = 'robots',
	/** The security.txt file */
	Security = 'security',
}

/** This is the interface implemented by SEOmatic. */
export type SeomaticInterface = {
	/**
	 * The FrontendTemplateContainer SEOmatic container.
	 * @deprecated This query is deprecated and will be removed in the future. You should use `frontendTemplates` instead.
	 */
	frontendTemplateContainer?: Maybe<Scalars['String']['output']>;
	frontendTemplates?: Maybe<Array<Maybe<FileContents>>>;
	/** The MetaJsonLdContainer SEOmatic container. */
	metaJsonLdContainer?: Maybe<Scalars['String']['output']>;
	/** The MetaLinkContainer SEOmatic container. */
	metaLinkContainer?: Maybe<Scalars['String']['output']>;
	/** The MetaScriptContainer SEOmatic container. */
	metaScriptContainer?: Maybe<Scalars['String']['output']>;
	/** The MetaSiteVarsContainer SEOmatic container. */
	metaSiteVarsContainer?: Maybe<Scalars['String']['output']>;
	/** The MetaTagContainer SEOmatic container. */
	metaTagContainer?: Maybe<Scalars['String']['output']>;
	/** The MetaTitleContainer SEOmatic container. */
	metaTitleContainer?: Maybe<Scalars['String']['output']>;
	sitemapIndexes?: Maybe<Array<Maybe<FileContents>>>;
	sitemapStyles?: Maybe<FileContents>;
	sitemaps?: Maybe<Array<Maybe<FileContents>>>;
};

/** This is the interface implemented by SEOmatic. */
export type SeomaticInterfaceFrontendTemplatesArgs = {
	site?: InputMaybe<Scalars['String']['input']>;
	siteId?: InputMaybe<Scalars['Int']['input']>;
	type?: InputMaybe<SeomaticFrontendTemplate>;
};

/** This is the interface implemented by SEOmatic. */
export type SeomaticInterfaceSitemapIndexesArgs = {
	site?: InputMaybe<Scalars['String']['input']>;
	siteId?: InputMaybe<Scalars['Int']['input']>;
};

/** This is the interface implemented by SEOmatic. */
export type SeomaticInterfaceSitemapsArgs = {
	filename?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Scalars['String']['input']>;
	siteId?: InputMaybe<Scalars['Int']['input']>;
	sourceBundleHandle?: InputMaybe<Scalars['String']['input']>;
	sourceBundleType?: InputMaybe<Scalars['String']['input']>;
};

/** This entity has all the SEOmatic fields */
export type SeomaticType = SeomaticInterface & {
	/**
	 * The FrontendTemplateContainer SEOmatic container.
	 * @deprecated This query is deprecated and will be removed in the future. You should use `frontendTemplates` instead.
	 */
	frontendTemplateContainer?: Maybe<Scalars['String']['output']>;
	frontendTemplates?: Maybe<Array<Maybe<FileContents>>>;
	/** The MetaJsonLdContainer SEOmatic container. */
	metaJsonLdContainer?: Maybe<Scalars['String']['output']>;
	/** The MetaLinkContainer SEOmatic container. */
	metaLinkContainer?: Maybe<Scalars['String']['output']>;
	/** The MetaScriptContainer SEOmatic container. */
	metaScriptContainer?: Maybe<Scalars['String']['output']>;
	/** The MetaSiteVarsContainer SEOmatic container. */
	metaSiteVarsContainer?: Maybe<Scalars['String']['output']>;
	/** The MetaTagContainer SEOmatic container. */
	metaTagContainer?: Maybe<Scalars['String']['output']>;
	/** The MetaTitleContainer SEOmatic container. */
	metaTitleContainer?: Maybe<Scalars['String']['output']>;
	sitemapIndexes?: Maybe<Array<Maybe<FileContents>>>;
	sitemapStyles?: Maybe<FileContents>;
	sitemaps?: Maybe<Array<Maybe<FileContents>>>;
};

/** This entity has all the SEOmatic fields */
export type SeomaticTypeFrontendTemplatesArgs = {
	site?: InputMaybe<Scalars['String']['input']>;
	siteId?: InputMaybe<Scalars['Int']['input']>;
	type?: InputMaybe<SeomaticFrontendTemplate>;
};

/** This entity has all the SEOmatic fields */
export type SeomaticTypeSitemapIndexesArgs = {
	site?: InputMaybe<Scalars['String']['input']>;
	siteId?: InputMaybe<Scalars['Int']['input']>;
};

/** This entity has all the SEOmatic fields */
export type SeomaticTypeSitemapsArgs = {
	filename?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Scalars['String']['input']>;
	siteId?: InputMaybe<Scalars['Int']['input']>;
	sourceBundleHandle?: InputMaybe<Scalars['String']['input']>;
	sourceBundleType?: InputMaybe<Scalars['String']['input']>;
};

/** This is the interface implemented by all Super Table blocks. */
export type SuperTableBlockInterface = {
	/** Return a number of related elements for a field. */
	_count?: Maybe<Scalars['Int']['output']>;
	/** Whether the element is archived or not. */
	archived?: Maybe<Scalars['Boolean']['output']>;
	/** The date the element was created. */
	dateCreated?: Maybe<Scalars['DateTime']['output']>;
	/** The date the element was last updated. */
	dateUpdated?: Maybe<Scalars['DateTime']['output']>;
	/** Whether the element is enabled or not. */
	enabled?: Maybe<Scalars['Boolean']['output']>;
	/** The ID of the field that owns the Super Table block. */
	fieldId?: Maybe<Scalars['Int']['output']>;
	/** The ID of the entity */
	id?: Maybe<Scalars['ID']['output']>;
	/** The language of the site element is associated with. */
	language?: Maybe<Scalars['String']['output']>;
	/** The ID of the element that owns the Super Table block. */
	ownerId?: Maybe<Scalars['Int']['output']>;
	/** The element’s search score, if the `search` parameter was used when querying for the element. */
	searchScore?: Maybe<Scalars['String']['output']>;
	/** The ID of the site the element is associated with. */
	siteId?: Maybe<Scalars['Int']['output']>;
	/** The unique identifier for an element-site relation. */
	siteSettingsId?: Maybe<Scalars['ID']['output']>;
	/** The element’s slug. */
	slug?: Maybe<Scalars['String']['output']>;
	/** The sort order of the Super Table block within the owner element field. */
	sortOrder?: Maybe<Scalars['Int']['output']>;
	/** The element’s status. */
	status?: Maybe<Scalars['String']['output']>;
	/** The element’s title. */
	title?: Maybe<Scalars['String']['output']>;
	/** Whether the element has been soft-deleted or not. */
	trashed?: Maybe<Scalars['Boolean']['output']>;
	/** The ID of the Super Table block's type. */
	typeId?: Maybe<Scalars['Int']['output']>;
	/** The UID of the entity */
	uid?: Maybe<Scalars['String']['output']>;
	/** The element’s URI. */
	uri?: Maybe<Scalars['String']['output']>;
};

/** This is the interface implemented by all Super Table blocks. */
export type SuperTableBlockInterface_CountArgs = {
	field: Scalars['String']['input'];
};

export type TagCriteriaInput = {
	/** Narrows the query results to only elements that have been archived. */
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	/** Narrows the query results based on the elements’ creation dates. */
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Narrows the query results based on the elements’ last-updated dates. */
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Narrows the query results based on whether the elements are enabled in the site they’re being queried in, per the `site` argument. */
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	/** Causes the query results to be returned in the order specified by the `id` argument. */
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	/** Narrows the query results based on the tag groups the tags belong to per the group’s handles. */
	group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Narrows the query results based on the tag groups the tags belong to, per the groups’ IDs. */
	groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	/** Narrows the query results based on the elements’ IDs. */
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	/** Causes the query results to be returned in reverse order. */
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	/** Sets the limit for paginated results. */
	limit?: InputMaybe<Scalars['Int']['input']>;
	/** Sets the offset for paginated results. */
	offset?: InputMaybe<Scalars['Int']['input']>;
	/** Sets the field the returned elements should be ordered by. */
	orderBy?: InputMaybe<Scalars['String']['input']>;
	/** Determines which site should be selected when querying multi-site elements. */
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	/** Narrows the query results based on a reference string. */
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	/** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	/** Narrows the query results to elements that relate to an asset list defined with this argument. */
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	/** Narrows the query results to elements that relate to a category list defined with this argument. */
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	/** Narrows the query results to elements that relate to an entry list defined with this argument. */
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	/** Narrows the query results to elements that relate to a tag list defined with this argument. */
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	/** Narrows the query results to elements that relate to a use list defined with this argument. */
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	/** Narrows the query results to only elements that match a search query. */
	search?: InputMaybe<Scalars['String']['input']>;
	/** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	/** Narrows the query results based on the unique identifier for an element-site relation. */
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	/** Narrows the query results based on the elements’ slugs. */
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Narrows the query results based on the elements’ statuses. */
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Narrows the query results based on the elements’ titles. */
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Narrows the query results to only elements that have been soft-deleted. */
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	/** Narrows the query results based on the elements’ UIDs. */
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Determines whether only elements with unique IDs should be returned by the query. */
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	/** Narrows the query results based on the elements’ URIs. */
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** This is the interface implemented by all trainings. */
export type TrainingInterface = {
	/** Return a number of related elements for a field. */
	_count?: Maybe<Scalars['Int']['output']>;
	/** Whether the element is archived or not. */
	archived?: Maybe<Scalars['Boolean']['output']>;
	/** Whether the course has been completed. */
	completed?: Maybe<Scalars['Boolean']['output']>;
	/** The training's completed date. */
	completedDate?: Maybe<Scalars['DateTime']['output']>;
	/** The training's course. */
	course?: Maybe<EntryInterface>;
	/** The ID of the entry that user is enrolled to. */
	courseId?: Maybe<Scalars['Int']['output']>;
	/** The date the element was created. */
	dateCreated?: Maybe<Scalars['DateTime']['output']>;
	/** The date the element was last updated. */
	dateUpdated?: Maybe<Scalars['DateTime']['output']>;
	/** Whether the element is enabled or not. */
	enabled?: Maybe<Scalars['Boolean']['output']>;
	/** The training's expiry date. */
	expiryDate?: Maybe<Scalars['DateTime']['output']>;
	/** FMCSA report status. */
	fmcsaStatus?: Maybe<Scalars['String']['output']>;
	/** The ID of the entity */
	id?: Maybe<Scalars['ID']['output']>;
	/** The training's instructor. */
	instructor?: Maybe<UserInterface>;
	/** The ID of the instructor. */
	instructorId?: Maybe<Scalars['Int']['output']>;
	/** The language of the site element is associated with. */
	language?: Maybe<Scalars['String']['output']>;
	/** The Matrix Block ID of the User and Course relation. */
	matrixblockId?: Maybe<Scalars['Int']['output']>;
	/** The course progress of the user. */
	progress?: Maybe<Scalars['Float']['output']>;
	/** The training's purchase date. */
	purchaseDate?: Maybe<Scalars['DateTime']['output']>;
	/** The score of the user. */
	score?: Maybe<Scalars['Float']['output']>;
	/** The element’s search score, if the `search` parameter was used when querying for the element. */
	searchScore?: Maybe<Scalars['String']['output']>;
	/** The ID of the site the element is associated with. */
	siteId?: Maybe<Scalars['Int']['output']>;
	/** The unique identifier for an element-site relation. */
	siteSettingsId?: Maybe<Scalars['ID']['output']>;
	/** The element’s slug. */
	slug?: Maybe<Scalars['String']['output']>;
	/** The element’s status. */
	status?: Maybe<Scalars['String']['output']>;
	/** The element’s title. */
	title?: Maybe<Scalars['String']['output']>;
	/** Whether the element has been soft-deleted or not. */
	trashed?: Maybe<Scalars['Boolean']['output']>;
	/** The UID of the entity */
	uid?: Maybe<Scalars['String']['output']>;
	/** The element’s URI. */
	uri?: Maybe<Scalars['String']['output']>;
	/** The training's user. */
	user?: Maybe<UserInterface>;
	/** The ID of the user. */
	userId?: Maybe<Scalars['Int']['output']>;
};

/** This is the interface implemented by all trainings. */
export type TrainingInterface_CountArgs = {
	field: Scalars['String']['input'];
};

export type User = ElementInterface &
	UserInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		applicationType?: Maybe<Scalars['String']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		audioProgress?: Maybe<Array<Maybe<AudioProgress_SuperTableField>>>;
		bulkPurchase?: Maybe<Array<Maybe<BulkPurchase_SuperTableField>>>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		dateOfBirth?: Maybe<Scalars['String']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		/** The user’s email. */
		email?: Maybe<Scalars['String']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The user’s first name. */
		firstName?: Maybe<Scalars['String']['output']>;
		/** The user’s first name or username. */
		friendlyName?: Maybe<Scalars['String']['output']>;
		/** The user’s full name. */
		fullName?: Maybe<Scalars['String']['output']>;
		genericSwitch?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		inviteType?: Maybe<Scalars['Boolean']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The user’s last name. */
		lastName?: Maybe<Scalars['String']['output']>;
		licenseOrPermitNumber?: Maybe<Scalars['String']['output']>;
		/** The user’s full name or username. */
		name?: Maybe<Scalars['String']['output']>;
		/** The user’s preferences. */
		preferences?: Maybe<Scalars['String']['output']>;
		/** The user’s preferred language. */
		preferredLanguage?: Maybe<Scalars['String']['output']>;
		quizzesTaken?: Maybe<Array<Maybe<QuizzesTaken_SuperTableField>>>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		snipcartCustomerId?: Maybe<Scalars['String']['output']>;
		state?: Maybe<Scalars['String']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
		userCourses?: Maybe<Array<Maybe<UserCourses_MatrixField>>>;
		/** The username. */
		username?: Maybe<Scalars['String']['output']>;
	};

export type User_CountArgs = {
	field: Scalars['String']['input'];
};

export type UserApplicationTypeArgs = {
	label?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserAudioProgressArgs = {
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UserBulkPurchaseArgs = {
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UserQuizzesTakenArgs = {
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UserStateArgs = {
	label?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserUserCoursesArgs = {
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UserCriteriaInput = {
	applicationType?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	/** Narrows the query results to only elements that have been archived. */
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	/** Narrows the query results based on the elements’ creation dates. */
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateOfBirth?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	/** Narrows the query results based on the elements’ last-updated dates. */
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Narrows the query results based on the users’ email addresses. */
	email?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Narrows the query results based on whether the elements are enabled in the site they’re being queried in, per the `site` argument. */
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	/** Narrows the query results based on the users’ first names. */
	firstName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Causes the query results to be returned in the order specified by the `id` argument. */
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	/** Narrows the query results based on the user group the users belong to. */
	group?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	/** Narrows the query results based on the user group the users belong to, per the groups’ IDs. */
	groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	/** Narrows the query results to only users that have (or don’t have) a user photo. */
	hasPhoto?: InputMaybe<Scalars['Boolean']['input']>;
	/** Narrows the query results based on the elements’ IDs. */
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	/** Causes the query results to be returned in reverse order. */
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	inviteType?: InputMaybe<Scalars['Boolean']['input']>;
	/** Narrows the query results based on the users’ last names. */
	lastName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	licenseOrPermitNumber?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	/** Sets the limit for paginated results. */
	limit?: InputMaybe<Scalars['Int']['input']>;
	/** Sets the offset for paginated results. */
	offset?: InputMaybe<Scalars['Int']['input']>;
	/** Sets the field the returned elements should be ordered by. */
	orderBy?: InputMaybe<Scalars['String']['input']>;
	/** Determines which site should be selected when querying multi-site elements. */
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	/** Narrows the query results based on a reference string. */
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	/** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	/** Narrows the query results to elements that relate to an asset list defined with this argument. */
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	/** Narrows the query results to elements that relate to a category list defined with this argument. */
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	/** Narrows the query results to elements that relate to an entry list defined with this argument. */
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	/** Narrows the query results to elements that relate to a tag list defined with this argument. */
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	/** Narrows the query results to elements that relate to a use list defined with this argument. */
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	/** Narrows the query results to only elements that match a search query. */
	search?: InputMaybe<Scalars['String']['input']>;
	/** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	/** Narrows the query results based on the unique identifier for an element-site relation. */
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	/** Narrows the query results based on the elements’ slugs. */
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	snipcartCustomerId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	/** Narrows the query results based on the elements’ statuses. */
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Narrows the query results based on the elements’ titles. */
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Narrows the query results to only elements that have been soft-deleted. */
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	/** Narrows the query results based on the elements’ UIDs. */
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Determines whether only elements with unique IDs should be returned by the query. */
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	/** Narrows the query results based on the elements’ URIs. */
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Narrows the query results based on the users’ usernames. */
	username?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** This is the interface implemented by all users. */
export type UserInterface = {
	/** Return a number of related elements for a field. */
	_count?: Maybe<Scalars['Int']['output']>;
	/** Whether the element is archived or not. */
	archived?: Maybe<Scalars['Boolean']['output']>;
	/** The date the element was created. */
	dateCreated?: Maybe<Scalars['DateTime']['output']>;
	/** The date the element was last updated. */
	dateUpdated?: Maybe<Scalars['DateTime']['output']>;
	/** The user’s email. */
	email?: Maybe<Scalars['String']['output']>;
	/** Whether the element is enabled or not. */
	enabled?: Maybe<Scalars['Boolean']['output']>;
	/** The user’s first name. */
	firstName?: Maybe<Scalars['String']['output']>;
	/** The user’s first name or username. */
	friendlyName?: Maybe<Scalars['String']['output']>;
	/** The user’s full name. */
	fullName?: Maybe<Scalars['String']['output']>;
	/** The ID of the entity */
	id?: Maybe<Scalars['ID']['output']>;
	/** The language of the site element is associated with. */
	language?: Maybe<Scalars['String']['output']>;
	/** The user’s last name. */
	lastName?: Maybe<Scalars['String']['output']>;
	/** The user’s full name or username. */
	name?: Maybe<Scalars['String']['output']>;
	/** The user’s preferences. */
	preferences?: Maybe<Scalars['String']['output']>;
	/** The user’s preferred language. */
	preferredLanguage?: Maybe<Scalars['String']['output']>;
	/** The element’s search score, if the `search` parameter was used when querying for the element. */
	searchScore?: Maybe<Scalars['String']['output']>;
	/** The ID of the site the element is associated with. */
	siteId?: Maybe<Scalars['Int']['output']>;
	/** The unique identifier for an element-site relation. */
	siteSettingsId?: Maybe<Scalars['ID']['output']>;
	/** The element’s slug. */
	slug?: Maybe<Scalars['String']['output']>;
	/** The element’s status. */
	status?: Maybe<Scalars['String']['output']>;
	/** The element’s title. */
	title?: Maybe<Scalars['String']['output']>;
	/** Whether the element has been soft-deleted or not. */
	trashed?: Maybe<Scalars['Boolean']['output']>;
	/** The UID of the entity */
	uid?: Maybe<Scalars['String']['output']>;
	/** The element’s URI. */
	uri?: Maybe<Scalars['String']['output']>;
	/** The username. */
	username?: Maybe<Scalars['String']['output']>;
};

/** This is the interface implemented by all users. */
export type UserInterface_CountArgs = {
	field: Scalars['String']['input'];
};

export type AboutUsContentBuilder_BgImageWithText_BlockType = ElementInterface &
	MatrixBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the field that owns the matrix block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		image?: Maybe<Array<Maybe<AssetInterface>>>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The ID of the element that owns the matrix block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the matrix block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		text?: Maybe<Scalars['String']['output']>;
		textPosition?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The handle of the matrix block’s type. */
		typeHandle?: Maybe<Scalars['String']['output']>;
		/** The ID of the matrix block’s type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type AboutUsContentBuilder_BgImageWithText_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type AboutUsContentBuilder_BgImageWithText_BlockTypeImageArgs = {
	altText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateModified?: InputMaybe<Scalars['String']['input']>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
	kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AboutUsContentBuilder_BgImageWithText_BlockTypeTextPositionArgs = {
	label?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AboutUsContentBuilder_TextCards_BlockType = ElementInterface &
	MatrixBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		backgroundColor?: Maybe<Scalars['String']['output']>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		description?: Maybe<Scalars['String']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the field that owns the matrix block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The ID of the element that owns the matrix block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		setDynamicCards?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the matrix block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		textCards?: Maybe<Array<Maybe<TextCards_SuperTableField>>>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The handle of the matrix block’s type. */
		typeHandle?: Maybe<Scalars['String']['output']>;
		/** The ID of the matrix block’s type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type AboutUsContentBuilder_TextCards_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type AboutUsContentBuilder_TextCards_BlockTypeBackgroundColorArgs = {
	label?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AboutUsContentBuilder_TextCards_BlockTypeTextCardsArgs = {
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AboutUsContentBuilder_TextOnly_BlockType = ElementInterface &
	MatrixBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		backgroundColor?: Maybe<Scalars['String']['output']>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the field that owns the matrix block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		heading?: Maybe<Scalars['String']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The ID of the element that owns the matrix block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the matrix block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		text?: Maybe<Array<Maybe<Text_SuperTableField>>>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The handle of the matrix block’s type. */
		typeHandle?: Maybe<Scalars['String']['output']>;
		/** The ID of the matrix block’s type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type AboutUsContentBuilder_TextOnly_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type AboutUsContentBuilder_TextOnly_BlockTypeBackgroundColorArgs = {
	label?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AboutUsContentBuilder_TextOnly_BlockTypeTextArgs = {
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AboutUsContentBuilder_TextWithCards_BlockType = ElementInterface &
	MatrixBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		backgroundColor?: Maybe<Scalars['String']['output']>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		description?: Maybe<Scalars['String']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the field that owns the matrix block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		heading?: Maybe<Scalars['String']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The ID of the element that owns the matrix block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the matrix block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The handle of the matrix block’s type. */
		typeHandle?: Maybe<Scalars['String']['output']>;
		/** The ID of the matrix block’s type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type AboutUsContentBuilder_TextWithCards_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type AboutUsContentBuilder_TextWithCards_BlockTypeBackgroundColorArgs = {
	label?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AboutUsContentBuilder_TextWithImage_BlockType = ElementInterface &
	MatrixBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		backgroundColor?: Maybe<Scalars['String']['output']>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the field that owns the matrix block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		image?: Maybe<Array<Maybe<AssetInterface>>>;
		imagePosition?: Maybe<Scalars['String']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The ID of the element that owns the matrix block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the matrix block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		text?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The handle of the matrix block’s type. */
		typeHandle?: Maybe<Scalars['String']['output']>;
		/** The ID of the matrix block’s type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type AboutUsContentBuilder_TextWithImage_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type AboutUsContentBuilder_TextWithImage_BlockTypeBackgroundColorArgs = {
	label?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AboutUsContentBuilder_TextWithImage_BlockTypeImageArgs = {
	altText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateModified?: InputMaybe<Scalars['String']['input']>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
	kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AboutUsContentBuilder_TextWithImage_BlockTypeImagePositionArgs = {
	label?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AudioProgress_BlockType = ElementInterface &
	SuperTableBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		audio?: Maybe<Array<Maybe<AssetInterface>>>;
		completed?: Maybe<Scalars['Boolean']['output']>;
		course?: Maybe<Array<Maybe<EntryInterface>>>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		duration?: Maybe<Scalars['Number']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		entry?: Maybe<Array<Maybe<EntryInterface>>>;
		/** The ID of the field that owns the Super Table block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The ID of the element that owns the Super Table block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		progress?: Maybe<Scalars['Number']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the Super Table block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the Super Table block's type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type AudioProgress_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type AudioProgress_BlockTypeAudioArgs = {
	altText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateModified?: InputMaybe<Scalars['String']['input']>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
	kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AudioProgress_BlockTypeCourseArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AudioProgress_BlockTypeEntryArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AudioProgress_SuperTableField = AudioProgress_BlockType;

export type Audio_Asset = AssetInterface &
	ElementInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the asset file was last modified. */
		dateModified?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The file extension for the asset file. */
		extension?: Maybe<Scalars['String']['output']>;
		/** The filename of the asset file. */
		filename?: Maybe<Scalars['String']['output']>;
		/** The focal point represented as an array with `x` and `y` keys, or null if it’s not an image. */
		focalPoint?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
		/** The ID of the folder that the asset belongs to. */
		folderId?: Maybe<Scalars['Int']['output']>;
		/** Whether a user-defined focal point is set on the asset. */
		hasFocalPoint?: Maybe<Scalars['Boolean']['output']>;
		/** The height in pixels or null if it’s not an image. */
		height?: Maybe<Scalars['Int']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		/** An `<img>` tag based on this asset. */
		img?: Maybe<Scalars['String']['output']>;
		/** The file kind. */
		kind?: Maybe<Scalars['String']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The file’s MIME type, if it can be determined. */
		mimeType?: Maybe<Scalars['String']['output']>;
		/** Returns the next element relative to this one, from a given set of criteria. */
		next?: Maybe<AssetInterface>;
		/** The asset’s path in the volume. */
		path?: Maybe<Scalars['String']['output']>;
		/** Returns the previous element relative to this one, from a given set of criteria. */
		prev?: Maybe<AssetInterface>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The file size in bytes. */
		size?: Maybe<Scalars['String']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** Returns a `srcset` attribute value based on the given widths or x-descriptors. */
		srcset?: Maybe<Scalars['String']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The user who first added this asset (if known). */
		uploader?: Maybe<UserInterface>;
		/** The ID of the user who first added this asset (if known). */
		uploaderId?: Maybe<Scalars['Int']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
		/** The full URL of the asset. This field accepts the same fields as the `transform` directive. */
		url?: Maybe<Scalars['String']['output']>;
		/** The ID of the volume that the asset belongs to. */
		volumeId?: Maybe<Scalars['Int']['output']>;
		/** The width in pixels or null if it’s not an image. */
		width?: Maybe<Scalars['Int']['output']>;
	};

export type Audio_Asset_CountArgs = {
	field: Scalars['String']['input'];
};

export type Audio_AssetHeightArgs = {
	format?: InputMaybe<Scalars['String']['input']>;
	handle?: InputMaybe<Scalars['String']['input']>;
	height?: InputMaybe<Scalars['Int']['input']>;
	immediately?: InputMaybe<Scalars['Boolean']['input']>;
	interlace?: InputMaybe<Scalars['String']['input']>;
	mode?: InputMaybe<Scalars['String']['input']>;
	position?: InputMaybe<Scalars['String']['input']>;
	quality?: InputMaybe<Scalars['Int']['input']>;
	transform?: InputMaybe<Scalars['String']['input']>;
	width?: InputMaybe<Scalars['Int']['input']>;
};

export type Audio_AssetNextArgs = {
	altText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateModified?: InputMaybe<Scalars['String']['input']>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
	kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Audio_AssetPrevArgs = {
	altText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateModified?: InputMaybe<Scalars['String']['input']>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
	kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Audio_AssetSrcsetArgs = {
	sizes: Array<Scalars['String']['input']>;
};

export type Audio_AssetUploaderArgs = {
	applicationType?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateOfBirth?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	email?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	firstName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	group?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	hasPhoto?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	inviteType?: InputMaybe<Scalars['Boolean']['input']>;
	lastName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	licenseOrPermitNumber?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	snipcartCustomerId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	username?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Audio_AssetUrlArgs = {
	format?: InputMaybe<Scalars['String']['input']>;
	handle?: InputMaybe<Scalars['String']['input']>;
	height?: InputMaybe<Scalars['Int']['input']>;
	immediately?: InputMaybe<Scalars['Boolean']['input']>;
	interlace?: InputMaybe<Scalars['String']['input']>;
	mode?: InputMaybe<Scalars['String']['input']>;
	position?: InputMaybe<Scalars['String']['input']>;
	quality?: InputMaybe<Scalars['Int']['input']>;
	transform?: InputMaybe<Scalars['String']['input']>;
	width?: InputMaybe<Scalars['Int']['input']>;
};

export type Audio_AssetWidthArgs = {
	format?: InputMaybe<Scalars['String']['input']>;
	handle?: InputMaybe<Scalars['String']['input']>;
	height?: InputMaybe<Scalars['Int']['input']>;
	immediately?: InputMaybe<Scalars['Boolean']['input']>;
	interlace?: InputMaybe<Scalars['String']['input']>;
	mode?: InputMaybe<Scalars['String']['input']>;
	position?: InputMaybe<Scalars['String']['input']>;
	quality?: InputMaybe<Scalars['Int']['input']>;
	transform?: InputMaybe<Scalars['String']['input']>;
	width?: InputMaybe<Scalars['Int']['input']>;
};

export type Audios_BlockType = ElementInterface &
	SuperTableBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		audio?: Maybe<Array<Maybe<AssetInterface>>>;
		completed?: Maybe<Scalars['Boolean']['output']>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		duration?: Maybe<Scalars['Number']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		entry?: Maybe<Array<Maybe<EntryInterface>>>;
		/** The ID of the field that owns the Super Table block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The ID of the element that owns the Super Table block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		progress?: Maybe<Scalars['Number']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the Super Table block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the Super Table block's type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type Audios_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type Audios_BlockTypeAudioArgs = {
	altText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateModified?: InputMaybe<Scalars['String']['input']>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
	kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Audios_BlockTypeEntryArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Audios_SuperTableField = Audios_BlockType;

export type Back_MatrixField = Back_Image_BlockType | Back_Text_BlockType;

export type Back_Image_BlockType = ElementInterface &
	MatrixBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		caption?: Maybe<Scalars['String']['output']>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the field that owns the matrix block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		image?: Maybe<Array<Maybe<AssetInterface>>>;
		isFullSize?: Maybe<Scalars['Boolean']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The ID of the element that owns the matrix block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the matrix block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The handle of the matrix block’s type. */
		typeHandle?: Maybe<Scalars['String']['output']>;
		/** The ID of the matrix block’s type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type Back_Image_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type Back_Image_BlockTypeImageArgs = {
	altText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateModified?: InputMaybe<Scalars['String']['input']>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
	kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Back_Text_BlockType = ElementInterface &
	MatrixBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the field that owns the matrix block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The ID of the element that owns the matrix block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the matrix block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		text?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The handle of the matrix block’s type. */
		typeHandle?: Maybe<Scalars['String']['output']>;
		/** The ID of the matrix block’s type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type Back_Text_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type Blocks_MatrixField = Blocks_Text_BlockType;

export type Blocks_Text_BlockType = ElementInterface &
	MatrixBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the field that owns the matrix block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The ID of the element that owns the matrix block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the matrix block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		text?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The handle of the matrix block’s type. */
		typeHandle?: Maybe<Scalars['String']['output']>;
		/** The ID of the matrix block’s type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type Blocks_Text_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type BulkPurchase_BlockType = ElementInterface &
	SuperTableBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		courses?: Maybe<Array<Maybe<Courses_MatrixField>>>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		dateOfPurchase?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the field that owns the Super Table block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		invoiceNumber?: Maybe<Scalars['String']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The ID of the element that owns the Super Table block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the Super Table block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the Super Table block's type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type BulkPurchase_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type BulkPurchase_BlockTypeCoursesArgs = {
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BulkPurchase_SuperTableField = BulkPurchase_BlockType;

export type Cards_MatrixField = Cards_Card_BlockType;

export type Cards_Card_BlockType = ElementInterface &
	MatrixBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		card?: Maybe<Scalars['String']['output']>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the field that owns the matrix block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The ID of the element that owns the matrix block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the matrix block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The handle of the matrix block’s type. */
		typeHandle?: Maybe<Scalars['String']['output']>;
		/** The ID of the matrix block’s type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type Cards_Card_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type CompletedVideos_BlockType = ElementInterface &
	SuperTableBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		completed?: Maybe<Scalars['Boolean']['output']>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		duration?: Maybe<Scalars['Number']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		entry?: Maybe<Array<Maybe<EntryInterface>>>;
		/** The ID of the field that owns the Super Table block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The ID of the element that owns the Super Table block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		progress?: Maybe<Scalars['Number']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the Super Table block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the Super Table block's type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type CompletedVideos_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type CompletedVideos_BlockTypeEntryArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CompletedVideos_SuperTableField = CompletedVideos_BlockType;

export type ContentBuilder_Heading_BlockType = ElementInterface &
	MatrixBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the field that owns the matrix block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		heading?: Maybe<Scalars['String']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The ID of the element that owns the matrix block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the matrix block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The handle of the matrix block’s type. */
		typeHandle?: Maybe<Scalars['String']['output']>;
		/** The ID of the matrix block’s type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type ContentBuilder_Heading_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type ContentBuilder_Image_BlockType = ElementInterface &
	MatrixBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the field that owns the matrix block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		image?: Maybe<Array<Maybe<AssetInterface>>>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The ID of the element that owns the matrix block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the matrix block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The handle of the matrix block’s type. */
		typeHandle?: Maybe<Scalars['String']['output']>;
		/** The ID of the matrix block’s type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type ContentBuilder_Image_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type ContentBuilder_Image_BlockTypeImageArgs = {
	altText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateModified?: InputMaybe<Scalars['String']['input']>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
	kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentBuilder_Text_BlockType = ElementInterface &
	MatrixBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the field that owns the matrix block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The ID of the element that owns the matrix block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the matrix block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		text?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The handle of the matrix block’s type. */
		typeHandle?: Maybe<Scalars['String']['output']>;
		/** The ID of the matrix block’s type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type ContentBuilder_Text_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type CorrectAnswers_TableRow = {
	answer?: Maybe<Scalars['String']['output']>;
	col1?: Maybe<Scalars['String']['output']>;
};

export type CourseNotices_BlockType = ElementInterface &
	SuperTableBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		description?: Maybe<Scalars['String']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the field that owns the Super Table block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		important?: Maybe<Scalars['Boolean']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The ID of the element that owns the Super Table block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the Super Table block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the Super Table block's type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type CourseNotices_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type CourseNotices_SuperTableField = CourseNotices_BlockType;

export type Course_Category = CategoryInterface &
	ElementInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		/** The category’s children. */
		children?: Maybe<Array<Maybe<CategoryInterface>>>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The handle of the group that contains the category. */
		groupHandle?: Maybe<Scalars['String']['output']>;
		/** The ID of the group that contains the category. */
		groupId?: Maybe<Scalars['Int']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The element’s level within its structure */
		level?: Maybe<Scalars['Int']['output']>;
		/** The element’s left position within its structure. */
		lft?: Maybe<Scalars['Int']['output']>;
		/** The same element in other locales. */
		localized?: Maybe<Array<Maybe<CategoryInterface>>>;
		/** Returns the next element relative to this one, from a given set of criteria. */
		next?: Maybe<CategoryInterface>;
		/** The category’s parent. */
		parent?: Maybe<CategoryInterface>;
		/** Returns the previous element relative to this one, from a given set of criteria. */
		prev?: Maybe<CategoryInterface>;
		/** The element’s right position within its structure. */
		rgt?: Maybe<Scalars['Int']['output']>;
		/** The element’s structure’s root ID */
		root?: Maybe<Scalars['Int']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** This query is used to query for SEOmatic meta data. */
		seomatic?: Maybe<SeomaticInterface>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s structure ID. */
		structureId?: Maybe<Scalars['Int']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
		/** The element’s full URL */
		url?: Maybe<Scalars['String']['output']>;
	};

export type Course_Category_CountArgs = {
	field: Scalars['String']['input'];
};

export type Course_CategoryChildrenArgs = {
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Course_CategoryLocalizedArgs = {
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Course_CategoryNextArgs = {
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Course_CategoryParentArgs = {
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Course_CategoryPrevArgs = {
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Course_CategorySeomaticArgs = {
	asArray?: InputMaybe<Scalars['Boolean']['input']>;
	environment?: InputMaybe<SeomaticEnvironment>;
	site?: InputMaybe<Scalars['String']['input']>;
	siteId?: InputMaybe<Scalars['Int']['input']>;
	uri?: InputMaybe<Scalars['String']['input']>;
};

export type Courses_Asset = AssetInterface &
	ElementInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		altText?: Maybe<Scalars['String']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the asset file was last modified. */
		dateModified?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The file extension for the asset file. */
		extension?: Maybe<Scalars['String']['output']>;
		/** The filename of the asset file. */
		filename?: Maybe<Scalars['String']['output']>;
		/** The focal point represented as an array with `x` and `y` keys, or null if it’s not an image. */
		focalPoint?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
		/** The ID of the folder that the asset belongs to. */
		folderId?: Maybe<Scalars['Int']['output']>;
		/** Whether a user-defined focal point is set on the asset. */
		hasFocalPoint?: Maybe<Scalars['Boolean']['output']>;
		/** The height in pixels or null if it’s not an image. */
		height?: Maybe<Scalars['Int']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		/** An `<img>` tag based on this asset. */
		img?: Maybe<Scalars['String']['output']>;
		/** The file kind. */
		kind?: Maybe<Scalars['String']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The file’s MIME type, if it can be determined. */
		mimeType?: Maybe<Scalars['String']['output']>;
		/** Returns the next element relative to this one, from a given set of criteria. */
		next?: Maybe<AssetInterface>;
		/** The asset’s path in the volume. */
		path?: Maybe<Scalars['String']['output']>;
		/** Returns the previous element relative to this one, from a given set of criteria. */
		prev?: Maybe<AssetInterface>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The file size in bytes. */
		size?: Maybe<Scalars['String']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** Returns a `srcset` attribute value based on the given widths or x-descriptors. */
		srcset?: Maybe<Scalars['String']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The user who first added this asset (if known). */
		uploader?: Maybe<UserInterface>;
		/** The ID of the user who first added this asset (if known). */
		uploaderId?: Maybe<Scalars['Int']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
		/** The full URL of the asset. This field accepts the same fields as the `transform` directive. */
		url?: Maybe<Scalars['String']['output']>;
		/** The ID of the volume that the asset belongs to. */
		volumeId?: Maybe<Scalars['Int']['output']>;
		/** The width in pixels or null if it’s not an image. */
		width?: Maybe<Scalars['Int']['output']>;
	};

export type Courses_Asset_CountArgs = {
	field: Scalars['String']['input'];
};

export type Courses_AssetHeightArgs = {
	format?: InputMaybe<Scalars['String']['input']>;
	handle?: InputMaybe<Scalars['String']['input']>;
	height?: InputMaybe<Scalars['Int']['input']>;
	immediately?: InputMaybe<Scalars['Boolean']['input']>;
	interlace?: InputMaybe<Scalars['String']['input']>;
	mode?: InputMaybe<Scalars['String']['input']>;
	position?: InputMaybe<Scalars['String']['input']>;
	quality?: InputMaybe<Scalars['Int']['input']>;
	transform?: InputMaybe<Scalars['String']['input']>;
	width?: InputMaybe<Scalars['Int']['input']>;
};

export type Courses_AssetNextArgs = {
	altText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateModified?: InputMaybe<Scalars['String']['input']>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
	kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Courses_AssetPrevArgs = {
	altText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateModified?: InputMaybe<Scalars['String']['input']>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
	kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Courses_AssetSrcsetArgs = {
	sizes: Array<Scalars['String']['input']>;
};

export type Courses_AssetUploaderArgs = {
	applicationType?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateOfBirth?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	email?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	firstName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	group?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	hasPhoto?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	inviteType?: InputMaybe<Scalars['Boolean']['input']>;
	lastName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	licenseOrPermitNumber?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	snipcartCustomerId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	username?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Courses_AssetUrlArgs = {
	format?: InputMaybe<Scalars['String']['input']>;
	handle?: InputMaybe<Scalars['String']['input']>;
	height?: InputMaybe<Scalars['Int']['input']>;
	immediately?: InputMaybe<Scalars['Boolean']['input']>;
	interlace?: InputMaybe<Scalars['String']['input']>;
	mode?: InputMaybe<Scalars['String']['input']>;
	position?: InputMaybe<Scalars['String']['input']>;
	quality?: InputMaybe<Scalars['Int']['input']>;
	transform?: InputMaybe<Scalars['String']['input']>;
	width?: InputMaybe<Scalars['Int']['input']>;
};

export type Courses_AssetWidthArgs = {
	format?: InputMaybe<Scalars['String']['input']>;
	handle?: InputMaybe<Scalars['String']['input']>;
	height?: InputMaybe<Scalars['Int']['input']>;
	immediately?: InputMaybe<Scalars['Boolean']['input']>;
	interlace?: InputMaybe<Scalars['String']['input']>;
	mode?: InputMaybe<Scalars['String']['input']>;
	position?: InputMaybe<Scalars['String']['input']>;
	quality?: InputMaybe<Scalars['Int']['input']>;
	transform?: InputMaybe<Scalars['String']['input']>;
	width?: InputMaybe<Scalars['Int']['input']>;
};

export type Courses_MatrixField = Courses_Course_BlockType;

export type Courses_Course_BlockType = ElementInterface &
	MatrixBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		course?: Maybe<Array<Maybe<EntryInterface>>>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the field that owns the matrix block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The ID of the element that owns the matrix block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		quantity?: Maybe<Scalars['Number']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the matrix block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The handle of the matrix block’s type. */
		typeHandle?: Maybe<Scalars['String']['output']>;
		/** The ID of the matrix block’s type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type Courses_Course_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type Courses_Course_BlockTypeCourseArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Courses_Course_Entry = ElementInterface &
	EntryInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		accessDays?: Maybe<Scalars['Number']['output']>;
		/** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
		ancestors?: Maybe<Array<Maybe<EntryInterface>>>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		/** The entry’s author. */
		author?: Maybe<UserInterface>;
		/** The ID of the author of this entry. */
		authorId?: Maybe<Scalars['Int']['output']>;
		/** Returns the entry’s canonical ID. */
		canonicalId?: Maybe<Scalars['Int']['output']>;
		/** Returns the entry’s canonical UUID. */
		canonicalUid?: Maybe<Scalars['String']['output']>;
		certificateTitle?: Maybe<Scalars['String']['output']>;
		/** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
		children?: Maybe<Array<Maybe<EntryInterface>>>;
		classEndorsementCode?: Maybe<Scalars['String']['output']>;
		courseNotices?: Maybe<Array<Maybe<CourseNotices_SuperTableField>>>;
		courseThumbnail?: Maybe<Array<Maybe<AssetInterface>>>;
		/** The current revision for the entry. */
		currentRevision?: Maybe<EntryInterface>;
		customCertificate?: Maybe<
			Array<Maybe<CustomCertificate_SuperTableField>>
		>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		/** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
		descendants?: Maybe<Array<Maybe<EntryInterface>>>;
		description?: Maybe<Scalars['String']['output']>;
		detailedDescription?: Maybe<Scalars['String']['output']>;
		/** The creator of a given draft. */
		draftCreator?: Maybe<UserInterface>;
		/** The draft ID (from the `drafts` table). */
		draftId?: Maybe<Scalars['Int']['output']>;
		/** The name of the draft. */
		draftName?: Maybe<Scalars['String']['output']>;
		/** The notes for the draft. */
		draftNotes?: Maybe<Scalars['String']['output']>;
		/** The drafts for the entry. */
		drafts?: Maybe<Array<Maybe<EntryInterface>>>;
		eldtApproved?: Maybe<Scalars['Boolean']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The expiry date of the entry. */
		expiryDate?: Maybe<Scalars['DateTime']['output']>;
		hideInBrowseCourses?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		includedLessons?: Maybe<Array<Maybe<EntryInterface>>>;
		introductoryPrice?: Maybe<
			Array<Maybe<IntroductoryPrice_SuperTableField>>
		>;
		/** Returns whether this is a draft. */
		isDraft?: Maybe<Scalars['Boolean']['output']>;
		/** Returns whether this is a revision. */
		isRevision?: Maybe<Scalars['Boolean']['output']>;
		/** Returns whether this is an unpublished draft. */
		isUnpublishedDraft?: Maybe<Scalars['Boolean']['output']>;
		/** Returns whether this is an unpublished draft. **This field is deprecated.** `isUnpublishedDraft` should be used instead. */
		isUnsavedDraft?: Maybe<Scalars['Boolean']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The element’s level within its structure */
		level?: Maybe<Scalars['Int']['output']>;
		/** The element’s left position within its structure. */
		lft?: Maybe<Scalars['Int']['output']>;
		/** The same element in other locales. */
		localized?: Maybe<Array<Maybe<EntryInterface>>>;
		/** Returns the next element relative to this one, from a given set of criteria. */
		next?: Maybe<EntryInterface>;
		/** The entry’s parent, if the section is a structure. */
		parent?: Maybe<EntryInterface>;
		/** The entry’s post date. */
		postDate?: Maybe<Scalars['DateTime']['output']>;
		/** Returns the previous element relative to this one, from a given set of criteria. */
		prev?: Maybe<EntryInterface>;
		price?: Maybe<Scalars['Number']['output']>;
		quiz?: Maybe<Array<Maybe<EntryInterface>>>;
		readingTime?: Maybe<Scalars['Number']['output']>;
		relatedCourses?: Maybe<Array<Maybe<EntryInterface>>>;
		/** The creator of a given revision. */
		revisionCreator?: Maybe<UserInterface>;
		/** The revision ID (from the `revisions` table). */
		revisionId?: Maybe<Scalars['Int']['output']>;
		/** The revision notes (from the `revisions` table). */
		revisionNotes?: Maybe<Scalars['String']['output']>;
		/** The revisions for the entry. */
		revisions?: Maybe<Array<Maybe<EntryInterface>>>;
		/** The element’s right position within its structure. */
		rgt?: Maybe<Scalars['Int']['output']>;
		/** The element’s structure’s root ID */
		root?: Maybe<Scalars['Int']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The handle of the section that contains the entry. */
		sectionHandle?: Maybe<Scalars['String']['output']>;
		/** The ID of the section that contains the entry. */
		sectionId?: Maybe<Scalars['Int']['output']>;
		seoSettings?: Maybe<Scalars['String']['output']>;
		/** This query is used to query for SEOmatic meta data. */
		seomatic?: Maybe<SeomaticInterface>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/**
		 * Returns the entry’s canonical ID.
		 * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
		 */
		sourceId?: Maybe<Scalars['Int']['output']>;
		/**
		 * Returns the entry’s canonical UUID.
		 * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
		 */
		sourceUid?: Maybe<Scalars['String']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s structure ID. */
		structureId?: Maybe<Scalars['Int']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The handle of the entry type that contains the entry. */
		typeHandle?: Maybe<Scalars['String']['output']>;
		/** The ID of the entry type that contains the entry. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
		/** The element’s full URL */
		url?: Maybe<Scalars['String']['output']>;
	};

export type Courses_Course_Entry_CountArgs = {
	field: Scalars['String']['input'];
};

export type Courses_Course_EntryAncestorsArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Courses_Course_EntryChildrenArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Courses_Course_EntryClassEndorsementCodeArgs = {
	label?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Courses_Course_EntryCourseNoticesArgs = {
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Courses_Course_EntryCourseThumbnailArgs = {
	altText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateModified?: InputMaybe<Scalars['String']['input']>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
	kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Courses_Course_EntryCustomCertificateArgs = {
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Courses_Course_EntryDescendantsArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Courses_Course_EntryDraftsArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Courses_Course_EntryIncludedLessonsArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Courses_Course_EntryIntroductoryPriceArgs = {
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Courses_Course_EntryLocalizedArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Courses_Course_EntryNextArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Courses_Course_EntryParentArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Courses_Course_EntryPrevArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Courses_Course_EntryQuizArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Courses_Course_EntryRelatedCoursesArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Courses_Course_EntryRevisionsArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Courses_Course_EntrySeomaticArgs = {
	asArray?: InputMaybe<Scalars['Boolean']['input']>;
	environment?: InputMaybe<SeomaticEnvironment>;
	site?: InputMaybe<Scalars['String']['input']>;
	siteId?: InputMaybe<Scalars['Int']['input']>;
	uri?: InputMaybe<Scalars['String']['input']>;
};

export type CustomCertificate_BlockType = ElementInterface &
	SuperTableBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		certificateHandle?: Maybe<Scalars['String']['output']>;
		certificateTemplate?: Maybe<Array<Maybe<AssetInterface>>>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the field that owns the Super Table block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		orientation?: Maybe<Scalars['String']['output']>;
		/** The ID of the element that owns the Super Table block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		pageSize?: Maybe<Scalars['String']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the Super Table block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the Super Table block's type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type CustomCertificate_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type CustomCertificate_BlockTypeCertificateHandleArgs = {
	label?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CustomCertificate_BlockTypeCertificateTemplateArgs = {
	altText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateModified?: InputMaybe<Scalars['String']['input']>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
	kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CustomCertificate_BlockTypeOrientationArgs = {
	label?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CustomCertificate_BlockTypePageSizeArgs = {
	label?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CustomCertificate_SuperTableField = CustomCertificate_BlockType;

export type CustomLink_BlockType = ElementInterface &
	SuperTableBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		customUri?: Maybe<Scalars['String']['output']>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the field that owns the Super Table block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		linkTitle?: Maybe<Scalars['String']['output']>;
		/** The ID of the element that owns the Super Table block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the Super Table block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the Super Table block's type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type CustomLink_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type CustomLink_SuperTableField = CustomLink_BlockType;

export type DialogCards_BlockType = ElementInterface &
	SuperTableBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		answer?: Maybe<Scalars['String']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the field that owns the Super Table block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		image?: Maybe<Array<Maybe<AssetInterface>>>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The ID of the element that owns the Super Table block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the Super Table block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		text?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the Super Table block's type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type DialogCards_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type DialogCards_BlockTypeImageArgs = {
	altText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateModified?: InputMaybe<Scalars['String']['input']>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
	kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DialogCards_SuperTableField = DialogCards_BlockType;

export type EmbeddedYoutube_BlockType = ElementInterface &
	SuperTableBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		contentUrl?: Maybe<Scalars['String']['output']>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		embedUrl?: Maybe<Scalars['String']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the field that owns the Super Table block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The ID of the element that owns the Super Table block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the Super Table block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		timestamps?: Maybe<Array<Maybe<Timestamps_TableRow>>>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the Super Table block's type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type EmbeddedYoutube_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type EmbeddedYoutube_SuperTableField = EmbeddedYoutube_BlockType;

export type Faq_Block_BlockType = ElementInterface &
	MatrixBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		answer?: Maybe<Scalars['String']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the field that owns the matrix block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The ID of the element that owns the matrix block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		question?: Maybe<Scalars['String']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the matrix block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The handle of the matrix block’s type. */
		typeHandle?: Maybe<Scalars['String']['output']>;
		/** The ID of the matrix block’s type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type Faq_Block_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type Features_BlockType = ElementInterface &
	SuperTableBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		description?: Maybe<Scalars['String']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the field that owns the Super Table block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		heading?: Maybe<Scalars['String']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		image?: Maybe<Array<Maybe<AssetInterface>>>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The ID of the element that owns the Super Table block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the Super Table block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the Super Table block's type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type Features_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type Features_BlockTypeImageArgs = {
	altText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateModified?: InputMaybe<Scalars['String']['input']>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
	kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Features_SuperTableField = Features_BlockType;

export type FlashCards_BlockType = ElementInterface &
	SuperTableBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		back?: Maybe<Array<Maybe<Back_MatrixField>>>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the field that owns the Super Table block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		front?: Maybe<Array<Maybe<Front_MatrixField>>>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The ID of the element that owns the Super Table block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the Super Table block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the Super Table block's type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type FlashCards_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type FlashCards_BlockTypeBackArgs = {
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FlashCards_BlockTypeFrontArgs = {
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FlashCards_SuperTableField = FlashCards_BlockType;

export type Front_MatrixField = Front_Image_BlockType | Front_Text_BlockType;

export type Front_Image_BlockType = ElementInterface &
	MatrixBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		caption?: Maybe<Scalars['String']['output']>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the field that owns the matrix block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		image?: Maybe<Array<Maybe<AssetInterface>>>;
		isFullSize?: Maybe<Scalars['Boolean']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The ID of the element that owns the matrix block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the matrix block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The handle of the matrix block’s type. */
		typeHandle?: Maybe<Scalars['String']['output']>;
		/** The ID of the matrix block’s type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type Front_Image_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type Front_Image_BlockTypeImageArgs = {
	altText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateModified?: InputMaybe<Scalars['String']['input']>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
	kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Front_Text_BlockType = ElementInterface &
	MatrixBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the field that owns the matrix block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The ID of the element that owns the matrix block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the matrix block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		text?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The handle of the matrix block’s type. */
		typeHandle?: Maybe<Scalars['String']['output']>;
		/** The ID of the matrix block’s type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type Front_Text_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type IntroductoryPrice_BlockType = ElementInterface &
	SuperTableBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		enable?: Maybe<Scalars['Boolean']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		expiryDate?: Maybe<Scalars['DateTime']['output']>;
		/** The ID of the field that owns the Super Table block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		initialPrice?: Maybe<Scalars['Number']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The ID of the element that owns the Super Table block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the Super Table block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the Super Table block's type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type IntroductoryPrice_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type IntroductoryPrice_SuperTableField = IntroductoryPrice_BlockType;

export type KeyCards_BlockType = ElementInterface &
	SuperTableBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		cardName?: Maybe<Scalars['String']['output']>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		description?: Maybe<Scalars['String']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the field that owns the Super Table block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The ID of the element that owns the Super Table block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the Super Table block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the Super Table block's type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type KeyCards_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type KeyCards_SuperTableField = KeyCards_BlockType;

export type LessonBuilder_MatrixField =
	| LessonBuilder_Accordion_BlockType
	| LessonBuilder_DialogCards_BlockType
	| LessonBuilder_Embed_BlockType
	| LessonBuilder_File_BlockType
	| LessonBuilder_HotspotQuiz_BlockType
	| LessonBuilder_ImageHotspots_BlockType
	| LessonBuilder_ImageScenes_BlockType
	| LessonBuilder_KeyCards_BlockType
	| LessonBuilder_Slides_BlockType
	| LessonBuilder_Text_BlockType
	| LessonBuilder_Video_BlockType;

export type LessonBuilder_Accordion_BlockType = ElementInterface &
	MatrixBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the field that owns the matrix block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		header?: Maybe<Scalars['String']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		instructions?: Maybe<Scalars['String']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The ID of the element that owns the matrix block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the matrix block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		termsAndDefinitions?: Maybe<
			Array<Maybe<TermsAndDefinitions_SuperTableField>>
		>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The handle of the matrix block’s type. */
		typeHandle?: Maybe<Scalars['String']['output']>;
		/** The ID of the matrix block’s type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type LessonBuilder_Accordion_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type LessonBuilder_Accordion_BlockTypeTermsAndDefinitionsArgs = {
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LessonBuilder_DialogCards_BlockType = ElementInterface &
	MatrixBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		description?: Maybe<Scalars['String']['output']>;
		dialogCards?: Maybe<Array<Maybe<DialogCards_SuperTableField>>>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the field that owns the matrix block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		flashCards?: Maybe<Array<Maybe<FlashCards_SuperTableField>>>;
		header?: Maybe<Scalars['String']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		instructions?: Maybe<Scalars['String']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The ID of the element that owns the matrix block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the matrix block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		subHeader?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The handle of the matrix block’s type. */
		typeHandle?: Maybe<Scalars['String']['output']>;
		/** The ID of the matrix block’s type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type LessonBuilder_DialogCards_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type LessonBuilder_DialogCards_BlockTypeDialogCardsArgs = {
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LessonBuilder_DialogCards_BlockTypeFlashCardsArgs = {
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LessonBuilder_Embed_BlockType = ElementInterface &
	MatrixBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		caption?: Maybe<Scalars['String']['output']>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		embed?: Maybe<Scalars['String']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the field that owns the matrix block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		header?: Maybe<Scalars['String']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		instructions?: Maybe<Scalars['String']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		overflowedWidth?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the element that owns the matrix block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the matrix block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The handle of the matrix block’s type. */
		typeHandle?: Maybe<Scalars['String']['output']>;
		/** The ID of the matrix block’s type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type LessonBuilder_Embed_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type LessonBuilder_File_BlockType = ElementInterface &
	MatrixBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		caption?: Maybe<Scalars['String']['output']>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the field that owns the matrix block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		file?: Maybe<Array<Maybe<AssetInterface>>>;
		fileType?: Maybe<Scalars['String']['output']>;
		header?: Maybe<Scalars['String']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		imageClass?: Maybe<Scalars['String']['output']>;
		imagePosition?: Maybe<Scalars['String']['output']>;
		imageTransform?: Maybe<Scalars['String']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		overflowedWidth?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the element that owns the matrix block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the matrix block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The handle of the matrix block’s type. */
		typeHandle?: Maybe<Scalars['String']['output']>;
		/** The ID of the matrix block’s type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type LessonBuilder_File_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type LessonBuilder_File_BlockTypeFileArgs = {
	altText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateModified?: InputMaybe<Scalars['String']['input']>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
	kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LessonBuilder_File_BlockTypeFileTypeArgs = {
	label?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LessonBuilder_File_BlockTypeImageClassArgs = {
	label?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LessonBuilder_File_BlockTypeImagePositionArgs = {
	label?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LessonBuilder_File_BlockTypeImageTransformArgs = {
	label?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LessonBuilder_HotspotQuiz_BlockType = ElementInterface &
	MatrixBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		backgroundImage?: Maybe<Array<Maybe<AssetInterface>>>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		duration?: Maybe<Scalars['Number']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the field that owns the matrix block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		header?: Maybe<Scalars['String']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The ID of the element that owns the matrix block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		questions?: Maybe<Array<Maybe<Questions_SuperTableField>>>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the matrix block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The handle of the matrix block’s type. */
		typeHandle?: Maybe<Scalars['String']['output']>;
		/** The ID of the matrix block’s type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type LessonBuilder_HotspotQuiz_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type LessonBuilder_HotspotQuiz_BlockTypeBackgroundImageArgs = {
	altText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateModified?: InputMaybe<Scalars['String']['input']>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
	kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LessonBuilder_HotspotQuiz_BlockTypeQuestionsArgs = {
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LessonBuilder_ImageHotspots_BlockType = ElementInterface &
	MatrixBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		backgroundImage?: Maybe<Array<Maybe<AssetInterface>>>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the field that owns the matrix block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		header?: Maybe<Scalars['String']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		imageMap?: Maybe<Scalars['String']['output']>;
		instructions?: Maybe<Scalars['String']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The ID of the element that owns the matrix block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the matrix block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		spots?: Maybe<Array<Maybe<Spots_SuperTableField>>>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The handle of the matrix block’s type. */
		typeHandle?: Maybe<Scalars['String']['output']>;
		/** The ID of the matrix block’s type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type LessonBuilder_ImageHotspots_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type LessonBuilder_ImageHotspots_BlockTypeBackgroundImageArgs = {
	altText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateModified?: InputMaybe<Scalars['String']['input']>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
	kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LessonBuilder_ImageHotspots_BlockTypeSpotsArgs = {
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LessonBuilder_ImageScenes_BlockType = ElementInterface &
	MatrixBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		backgroundImage?: Maybe<Array<Maybe<AssetInterface>>>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the field that owns the matrix block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		header?: Maybe<Scalars['String']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		instructions?: Maybe<Scalars['String']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The ID of the element that owns the matrix block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		scenes?: Maybe<Array<Maybe<Scenes_SuperTableField>>>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the matrix block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The handle of the matrix block’s type. */
		typeHandle?: Maybe<Scalars['String']['output']>;
		/** The ID of the matrix block’s type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type LessonBuilder_ImageScenes_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type LessonBuilder_ImageScenes_BlockTypeBackgroundImageArgs = {
	altText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateModified?: InputMaybe<Scalars['String']['input']>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
	kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LessonBuilder_ImageScenes_BlockTypeScenesArgs = {
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LessonBuilder_KeyCards_BlockType = ElementInterface &
	MatrixBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the field that owns the matrix block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		header?: Maybe<Scalars['String']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		keyCards?: Maybe<Array<Maybe<KeyCards_SuperTableField>>>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		overflowedWidth?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the element that owns the matrix block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the matrix block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The handle of the matrix block’s type. */
		typeHandle?: Maybe<Scalars['String']['output']>;
		/** The ID of the matrix block’s type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type LessonBuilder_KeyCards_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type LessonBuilder_KeyCards_BlockTypeKeyCardsArgs = {
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LessonBuilder_Slides_BlockType = ElementInterface &
	MatrixBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the field that owns the matrix block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		header?: Maybe<Scalars['String']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		lessonSlides?: Maybe<Array<Maybe<LessonSlides_SuperTableField>>>;
		/** The ID of the element that owns the matrix block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the matrix block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The handle of the matrix block’s type. */
		typeHandle?: Maybe<Scalars['String']['output']>;
		/** The ID of the matrix block’s type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type LessonBuilder_Slides_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type LessonBuilder_Slides_BlockTypeLessonSlidesArgs = {
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LessonBuilder_Text_BlockType = ElementInterface &
	MatrixBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		body?: Maybe<Scalars['String']['output']>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the field that owns the matrix block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		header?: Maybe<Scalars['String']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The ID of the element that owns the matrix block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the matrix block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		textType?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The handle of the matrix block’s type. */
		typeHandle?: Maybe<Scalars['String']['output']>;
		/** The ID of the matrix block’s type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type LessonBuilder_Text_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type LessonBuilder_Text_BlockTypeTextTypeArgs = {
	label?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LessonBuilder_Video_BlockType = ElementInterface &
	MatrixBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		completedAtDuration?: Maybe<Scalars['String']['output']>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the field that owns the matrix block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		header?: Maybe<Scalars['String']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The ID of the element that owns the matrix block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		showVideoControls?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the matrix block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The handle of the matrix block’s type. */
		typeHandle?: Maybe<Scalars['String']['output']>;
		/** The ID of the matrix block’s type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
		videoUrl?: Maybe<Scalars['String']['output']>;
	};

export type LessonBuilder_Video_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type LessonSlides_BlockType = ElementInterface &
	SuperTableBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the field that owns the Super Table block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The ID of the element that owns the Super Table block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		slideImage?: Maybe<Array<Maybe<AssetInterface>>>;
		slideType?: Maybe<Scalars['String']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the Super Table block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		text?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the Super Table block's type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type LessonSlides_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type LessonSlides_BlockTypeSlideImageArgs = {
	altText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateModified?: InputMaybe<Scalars['String']['input']>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
	kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LessonSlides_BlockTypeSlideTypeArgs = {
	label?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LessonSlides_SuperTableField = LessonSlides_BlockType;

export type Lessons_Asset = AssetInterface &
	ElementInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		altText?: Maybe<Scalars['String']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the asset file was last modified. */
		dateModified?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The file extension for the asset file. */
		extension?: Maybe<Scalars['String']['output']>;
		/** The filename of the asset file. */
		filename?: Maybe<Scalars['String']['output']>;
		/** The focal point represented as an array with `x` and `y` keys, or null if it’s not an image. */
		focalPoint?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
		/** The ID of the folder that the asset belongs to. */
		folderId?: Maybe<Scalars['Int']['output']>;
		/** Whether a user-defined focal point is set on the asset. */
		hasFocalPoint?: Maybe<Scalars['Boolean']['output']>;
		/** The height in pixels or null if it’s not an image. */
		height?: Maybe<Scalars['Int']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		/** An `<img>` tag based on this asset. */
		img?: Maybe<Scalars['String']['output']>;
		/** The file kind. */
		kind?: Maybe<Scalars['String']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The file’s MIME type, if it can be determined. */
		mimeType?: Maybe<Scalars['String']['output']>;
		/** Returns the next element relative to this one, from a given set of criteria. */
		next?: Maybe<AssetInterface>;
		/** The asset’s path in the volume. */
		path?: Maybe<Scalars['String']['output']>;
		/** Returns the previous element relative to this one, from a given set of criteria. */
		prev?: Maybe<AssetInterface>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The file size in bytes. */
		size?: Maybe<Scalars['String']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** Returns a `srcset` attribute value based on the given widths or x-descriptors. */
		srcset?: Maybe<Scalars['String']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The user who first added this asset (if known). */
		uploader?: Maybe<UserInterface>;
		/** The ID of the user who first added this asset (if known). */
		uploaderId?: Maybe<Scalars['Int']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
		/** The full URL of the asset. This field accepts the same fields as the `transform` directive. */
		url?: Maybe<Scalars['String']['output']>;
		/** The ID of the volume that the asset belongs to. */
		volumeId?: Maybe<Scalars['Int']['output']>;
		/** The width in pixels or null if it’s not an image. */
		width?: Maybe<Scalars['Int']['output']>;
	};

export type Lessons_Asset_CountArgs = {
	field: Scalars['String']['input'];
};

export type Lessons_AssetHeightArgs = {
	format?: InputMaybe<Scalars['String']['input']>;
	handle?: InputMaybe<Scalars['String']['input']>;
	height?: InputMaybe<Scalars['Int']['input']>;
	immediately?: InputMaybe<Scalars['Boolean']['input']>;
	interlace?: InputMaybe<Scalars['String']['input']>;
	mode?: InputMaybe<Scalars['String']['input']>;
	position?: InputMaybe<Scalars['String']['input']>;
	quality?: InputMaybe<Scalars['Int']['input']>;
	transform?: InputMaybe<Scalars['String']['input']>;
	width?: InputMaybe<Scalars['Int']['input']>;
};

export type Lessons_AssetNextArgs = {
	altText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateModified?: InputMaybe<Scalars['String']['input']>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
	kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Lessons_AssetPrevArgs = {
	altText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateModified?: InputMaybe<Scalars['String']['input']>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
	kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Lessons_AssetSrcsetArgs = {
	sizes: Array<Scalars['String']['input']>;
};

export type Lessons_AssetUploaderArgs = {
	applicationType?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateOfBirth?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	email?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	firstName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	group?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	hasPhoto?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	inviteType?: InputMaybe<Scalars['Boolean']['input']>;
	lastName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	licenseOrPermitNumber?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	snipcartCustomerId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	username?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Lessons_AssetUrlArgs = {
	format?: InputMaybe<Scalars['String']['input']>;
	handle?: InputMaybe<Scalars['String']['input']>;
	height?: InputMaybe<Scalars['Int']['input']>;
	immediately?: InputMaybe<Scalars['Boolean']['input']>;
	interlace?: InputMaybe<Scalars['String']['input']>;
	mode?: InputMaybe<Scalars['String']['input']>;
	position?: InputMaybe<Scalars['String']['input']>;
	quality?: InputMaybe<Scalars['Int']['input']>;
	transform?: InputMaybe<Scalars['String']['input']>;
	width?: InputMaybe<Scalars['Int']['input']>;
};

export type Lessons_AssetWidthArgs = {
	format?: InputMaybe<Scalars['String']['input']>;
	handle?: InputMaybe<Scalars['String']['input']>;
	height?: InputMaybe<Scalars['Int']['input']>;
	immediately?: InputMaybe<Scalars['Boolean']['input']>;
	interlace?: InputMaybe<Scalars['String']['input']>;
	mode?: InputMaybe<Scalars['String']['input']>;
	position?: InputMaybe<Scalars['String']['input']>;
	quality?: InputMaybe<Scalars['Int']['input']>;
	transform?: InputMaybe<Scalars['String']['input']>;
	width?: InputMaybe<Scalars['Int']['input']>;
};

export type Lessons_Lesson_Entry = ElementInterface &
	EntryInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
		ancestors?: Maybe<Array<Maybe<EntryInterface>>>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		audio?: Maybe<Array<Maybe<AssetInterface>>>;
		/** The entry’s author. */
		author?: Maybe<UserInterface>;
		/** The ID of the author of this entry. */
		authorId?: Maybe<Scalars['Int']['output']>;
		/** Returns the entry’s canonical ID. */
		canonicalId?: Maybe<Scalars['Int']['output']>;
		/** Returns the entry’s canonical UUID. */
		canonicalUid?: Maybe<Scalars['String']['output']>;
		/** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
		children?: Maybe<Array<Maybe<EntryInterface>>>;
		/** The current revision for the entry. */
		currentRevision?: Maybe<EntryInterface>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		/** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
		descendants?: Maybe<Array<Maybe<EntryInterface>>>;
		description?: Maybe<Scalars['String']['output']>;
		/** The creator of a given draft. */
		draftCreator?: Maybe<UserInterface>;
		/** The draft ID (from the `drafts` table). */
		draftId?: Maybe<Scalars['Int']['output']>;
		/** The name of the draft. */
		draftName?: Maybe<Scalars['String']['output']>;
		/** The notes for the draft. */
		draftNotes?: Maybe<Scalars['String']['output']>;
		/** The drafts for the entry. */
		drafts?: Maybe<Array<Maybe<EntryInterface>>>;
		embeddedYoutube?: Maybe<Array<Maybe<EmbeddedYoutube_SuperTableField>>>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The expiry date of the entry. */
		expiryDate?: Maybe<Scalars['DateTime']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		/** Returns whether this is a draft. */
		isDraft?: Maybe<Scalars['Boolean']['output']>;
		/** Returns whether this is a revision. */
		isRevision?: Maybe<Scalars['Boolean']['output']>;
		/** Returns whether this is an unpublished draft. */
		isUnpublishedDraft?: Maybe<Scalars['Boolean']['output']>;
		/** Returns whether this is an unpublished draft. **This field is deprecated.** `isUnpublishedDraft` should be used instead. */
		isUnsavedDraft?: Maybe<Scalars['Boolean']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		lessonImage?: Maybe<Array<Maybe<AssetInterface>>>;
		/** The element’s level within its structure */
		level?: Maybe<Scalars['Int']['output']>;
		/** The element’s left position within its structure. */
		lft?: Maybe<Scalars['Int']['output']>;
		/** The same element in other locales. */
		localized?: Maybe<Array<Maybe<EntryInterface>>>;
		locked?: Maybe<Scalars['Boolean']['output']>;
		/** Returns the next element relative to this one, from a given set of criteria. */
		next?: Maybe<EntryInterface>;
		/** The entry’s parent, if the section is a structure. */
		parent?: Maybe<EntryInterface>;
		/** The entry’s post date. */
		postDate?: Maybe<Scalars['DateTime']['output']>;
		/** Returns the previous element relative to this one, from a given set of criteria. */
		prev?: Maybe<EntryInterface>;
		price?: Maybe<Scalars['Number']['output']>;
		readingTime?: Maybe<Scalars['Number']['output']>;
		/** The creator of a given revision. */
		revisionCreator?: Maybe<UserInterface>;
		/** The revision ID (from the `revisions` table). */
		revisionId?: Maybe<Scalars['Int']['output']>;
		/** The revision notes (from the `revisions` table). */
		revisionNotes?: Maybe<Scalars['String']['output']>;
		/** The revisions for the entry. */
		revisions?: Maybe<Array<Maybe<EntryInterface>>>;
		/** The element’s right position within its structure. */
		rgt?: Maybe<Scalars['Int']['output']>;
		/** The element’s structure’s root ID */
		root?: Maybe<Scalars['Int']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The handle of the section that contains the entry. */
		sectionHandle?: Maybe<Scalars['String']['output']>;
		/** The ID of the section that contains the entry. */
		sectionId?: Maybe<Scalars['Int']['output']>;
		/** This query is used to query for SEOmatic meta data. */
		seomatic?: Maybe<SeomaticInterface>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/**
		 * Returns the entry’s canonical ID.
		 * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
		 */
		sourceId?: Maybe<Scalars['Int']['output']>;
		/**
		 * Returns the entry’s canonical UUID.
		 * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
		 */
		sourceUid?: Maybe<Scalars['String']['output']>;
		state?: Maybe<Scalars['String']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s structure ID. */
		structureId?: Maybe<Scalars['Int']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The handle of the entry type that contains the entry. */
		typeHandle?: Maybe<Scalars['String']['output']>;
		/** The ID of the entry type that contains the entry. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
		/** The element’s full URL */
		url?: Maybe<Scalars['String']['output']>;
	};

export type Lessons_Lesson_Entry_CountArgs = {
	field: Scalars['String']['input'];
};

export type Lessons_Lesson_EntryAncestorsArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Lessons_Lesson_EntryAudioArgs = {
	altText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateModified?: InputMaybe<Scalars['String']['input']>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
	kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Lessons_Lesson_EntryChildrenArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Lessons_Lesson_EntryDescendantsArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Lessons_Lesson_EntryDraftsArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Lessons_Lesson_EntryEmbeddedYoutubeArgs = {
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Lessons_Lesson_EntryLessonImageArgs = {
	altText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateModified?: InputMaybe<Scalars['String']['input']>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
	kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Lessons_Lesson_EntryLocalizedArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Lessons_Lesson_EntryNextArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Lessons_Lesson_EntryParentArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Lessons_Lesson_EntryPrevArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Lessons_Lesson_EntryRevisionsArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Lessons_Lesson_EntrySeomaticArgs = {
	asArray?: InputMaybe<Scalars['Boolean']['input']>;
	environment?: InputMaybe<SeomaticEnvironment>;
	site?: InputMaybe<Scalars['String']['input']>;
	siteId?: InputMaybe<Scalars['Int']['input']>;
	uri?: InputMaybe<Scalars['String']['input']>;
};

export type Lessons_Lesson_EntryStateArgs = {
	label?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Lessons_Quiz_Entry = ElementInterface &
	EntryInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
		ancestors?: Maybe<Array<Maybe<EntryInterface>>>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		/** The entry’s author. */
		author?: Maybe<UserInterface>;
		/** The ID of the author of this entry. */
		authorId?: Maybe<Scalars['Int']['output']>;
		/** Returns the entry’s canonical ID. */
		canonicalId?: Maybe<Scalars['Int']['output']>;
		/** Returns the entry’s canonical UUID. */
		canonicalUid?: Maybe<Scalars['String']['output']>;
		/** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
		children?: Maybe<Array<Maybe<EntryInterface>>>;
		/** The current revision for the entry. */
		currentRevision?: Maybe<EntryInterface>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		/** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
		descendants?: Maybe<Array<Maybe<EntryInterface>>>;
		/** The creator of a given draft. */
		draftCreator?: Maybe<UserInterface>;
		/** The draft ID (from the `drafts` table). */
		draftId?: Maybe<Scalars['Int']['output']>;
		/** The name of the draft. */
		draftName?: Maybe<Scalars['String']['output']>;
		/** The notes for the draft. */
		draftNotes?: Maybe<Scalars['String']['output']>;
		/** The drafts for the entry. */
		drafts?: Maybe<Array<Maybe<EntryInterface>>>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The expiry date of the entry. */
		expiryDate?: Maybe<Scalars['DateTime']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		/** Returns whether this is a draft. */
		isDraft?: Maybe<Scalars['Boolean']['output']>;
		/** Returns whether this is a revision. */
		isRevision?: Maybe<Scalars['Boolean']['output']>;
		/** Returns whether this is an unpublished draft. */
		isUnpublishedDraft?: Maybe<Scalars['Boolean']['output']>;
		/** Returns whether this is an unpublished draft. **This field is deprecated.** `isUnpublishedDraft` should be used instead. */
		isUnsavedDraft?: Maybe<Scalars['Boolean']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The element’s level within its structure */
		level?: Maybe<Scalars['Int']['output']>;
		/** The element’s left position within its structure. */
		lft?: Maybe<Scalars['Int']['output']>;
		/** The same element in other locales. */
		localized?: Maybe<Array<Maybe<EntryInterface>>>;
		/** Returns the next element relative to this one, from a given set of criteria. */
		next?: Maybe<EntryInterface>;
		/** The entry’s parent, if the section is a structure. */
		parent?: Maybe<EntryInterface>;
		/** The entry’s post date. */
		postDate?: Maybe<Scalars['DateTime']['output']>;
		/** Returns the previous element relative to this one, from a given set of criteria. */
		prev?: Maybe<EntryInterface>;
		quiz?: Maybe<Array<Maybe<EntryInterface>>>;
		readingTime?: Maybe<Scalars['Number']['output']>;
		/** The creator of a given revision. */
		revisionCreator?: Maybe<UserInterface>;
		/** The revision ID (from the `revisions` table). */
		revisionId?: Maybe<Scalars['Int']['output']>;
		/** The revision notes (from the `revisions` table). */
		revisionNotes?: Maybe<Scalars['String']['output']>;
		/** The revisions for the entry. */
		revisions?: Maybe<Array<Maybe<EntryInterface>>>;
		/** The element’s right position within its structure. */
		rgt?: Maybe<Scalars['Int']['output']>;
		/** The element’s structure’s root ID */
		root?: Maybe<Scalars['Int']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The handle of the section that contains the entry. */
		sectionHandle?: Maybe<Scalars['String']['output']>;
		/** The ID of the section that contains the entry. */
		sectionId?: Maybe<Scalars['Int']['output']>;
		/** This query is used to query for SEOmatic meta data. */
		seomatic?: Maybe<SeomaticInterface>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/**
		 * Returns the entry’s canonical ID.
		 * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
		 */
		sourceId?: Maybe<Scalars['Int']['output']>;
		/**
		 * Returns the entry’s canonical UUID.
		 * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
		 */
		sourceUid?: Maybe<Scalars['String']['output']>;
		state?: Maybe<Scalars['String']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s structure ID. */
		structureId?: Maybe<Scalars['Int']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The handle of the entry type that contains the entry. */
		typeHandle?: Maybe<Scalars['String']['output']>;
		/** The ID of the entry type that contains the entry. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
		/** The element’s full URL */
		url?: Maybe<Scalars['String']['output']>;
	};

export type Lessons_Quiz_Entry_CountArgs = {
	field: Scalars['String']['input'];
};

export type Lessons_Quiz_EntryAncestorsArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Lessons_Quiz_EntryChildrenArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Lessons_Quiz_EntryDescendantsArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Lessons_Quiz_EntryDraftsArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Lessons_Quiz_EntryLocalizedArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Lessons_Quiz_EntryNextArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Lessons_Quiz_EntryParentArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Lessons_Quiz_EntryPrevArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Lessons_Quiz_EntryQuizArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Lessons_Quiz_EntryRevisionsArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Lessons_Quiz_EntrySeomaticArgs = {
	asArray?: InputMaybe<Scalars['Boolean']['input']>;
	environment?: InputMaybe<SeomaticEnvironment>;
	site?: InputMaybe<Scalars['String']['input']>;
	siteId?: InputMaybe<Scalars['Int']['input']>;
	uri?: InputMaybe<Scalars['String']['input']>;
};

export type Lessons_Quiz_EntryStateArgs = {
	label?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Lessons_Segment_Entry = ElementInterface &
	EntryInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
		ancestors?: Maybe<Array<Maybe<EntryInterface>>>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		audio?: Maybe<Array<Maybe<AssetInterface>>>;
		/** The entry’s author. */
		author?: Maybe<UserInterface>;
		/** The ID of the author of this entry. */
		authorId?: Maybe<Scalars['Int']['output']>;
		/** Returns the entry’s canonical ID. */
		canonicalId?: Maybe<Scalars['Int']['output']>;
		/** Returns the entry’s canonical UUID. */
		canonicalUid?: Maybe<Scalars['String']['output']>;
		/** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
		children?: Maybe<Array<Maybe<EntryInterface>>>;
		/** The current revision for the entry. */
		currentRevision?: Maybe<EntryInterface>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		/** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
		descendants?: Maybe<Array<Maybe<EntryInterface>>>;
		description?: Maybe<Scalars['String']['output']>;
		/** The creator of a given draft. */
		draftCreator?: Maybe<UserInterface>;
		/** The draft ID (from the `drafts` table). */
		draftId?: Maybe<Scalars['Int']['output']>;
		/** The name of the draft. */
		draftName?: Maybe<Scalars['String']['output']>;
		/** The notes for the draft. */
		draftNotes?: Maybe<Scalars['String']['output']>;
		/** The drafts for the entry. */
		drafts?: Maybe<Array<Maybe<EntryInterface>>>;
		embeddedYoutube?: Maybe<Array<Maybe<EmbeddedYoutube_SuperTableField>>>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The expiry date of the entry. */
		expiryDate?: Maybe<Scalars['DateTime']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		/** Returns whether this is a draft. */
		isDraft?: Maybe<Scalars['Boolean']['output']>;
		/** Returns whether this is a revision. */
		isRevision?: Maybe<Scalars['Boolean']['output']>;
		/** Returns whether this is an unpublished draft. */
		isUnpublishedDraft?: Maybe<Scalars['Boolean']['output']>;
		/** Returns whether this is an unpublished draft. **This field is deprecated.** `isUnpublishedDraft` should be used instead. */
		isUnsavedDraft?: Maybe<Scalars['Boolean']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		lessonBuilder?: Maybe<Array<Maybe<LessonBuilder_MatrixField>>>;
		/** The element’s level within its structure */
		level?: Maybe<Scalars['Int']['output']>;
		/** The element’s left position within its structure. */
		lft?: Maybe<Scalars['Int']['output']>;
		/** The same element in other locales. */
		localized?: Maybe<Array<Maybe<EntryInterface>>>;
		/** Returns the next element relative to this one, from a given set of criteria. */
		next?: Maybe<EntryInterface>;
		/** The entry’s parent, if the section is a structure. */
		parent?: Maybe<EntryInterface>;
		/** The entry’s post date. */
		postDate?: Maybe<Scalars['DateTime']['output']>;
		/** Returns the previous element relative to this one, from a given set of criteria. */
		prev?: Maybe<EntryInterface>;
		readingTime?: Maybe<Scalars['Number']['output']>;
		/** The creator of a given revision. */
		revisionCreator?: Maybe<UserInterface>;
		/** The revision ID (from the `revisions` table). */
		revisionId?: Maybe<Scalars['Int']['output']>;
		/** The revision notes (from the `revisions` table). */
		revisionNotes?: Maybe<Scalars['String']['output']>;
		/** The revisions for the entry. */
		revisions?: Maybe<Array<Maybe<EntryInterface>>>;
		/** The element’s right position within its structure. */
		rgt?: Maybe<Scalars['Int']['output']>;
		/** The element’s structure’s root ID */
		root?: Maybe<Scalars['Int']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The handle of the section that contains the entry. */
		sectionHandle?: Maybe<Scalars['String']['output']>;
		/** The ID of the section that contains the entry. */
		sectionId?: Maybe<Scalars['Int']['output']>;
		/** This query is used to query for SEOmatic meta data. */
		seomatic?: Maybe<SeomaticInterface>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/**
		 * Returns the entry’s canonical ID.
		 * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
		 */
		sourceId?: Maybe<Scalars['Int']['output']>;
		/**
		 * Returns the entry’s canonical UUID.
		 * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
		 */
		sourceUid?: Maybe<Scalars['String']['output']>;
		state?: Maybe<Scalars['String']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s structure ID. */
		structureId?: Maybe<Scalars['Int']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The handle of the entry type that contains the entry. */
		typeHandle?: Maybe<Scalars['String']['output']>;
		/** The ID of the entry type that contains the entry. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
		/** The element’s full URL */
		url?: Maybe<Scalars['String']['output']>;
	};

export type Lessons_Segment_Entry_CountArgs = {
	field: Scalars['String']['input'];
};

export type Lessons_Segment_EntryAncestorsArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Lessons_Segment_EntryAudioArgs = {
	altText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateModified?: InputMaybe<Scalars['String']['input']>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
	kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Lessons_Segment_EntryChildrenArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Lessons_Segment_EntryDescendantsArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Lessons_Segment_EntryDraftsArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Lessons_Segment_EntryEmbeddedYoutubeArgs = {
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Lessons_Segment_EntryLessonBuilderArgs = {
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Lessons_Segment_EntryLocalizedArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Lessons_Segment_EntryNextArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Lessons_Segment_EntryParentArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Lessons_Segment_EntryPrevArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Lessons_Segment_EntryRevisionsArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Lessons_Segment_EntrySeomaticArgs = {
	asArray?: InputMaybe<Scalars['Boolean']['input']>;
	environment?: InputMaybe<SeomaticEnvironment>;
	site?: InputMaybe<Scalars['String']['input']>;
	siteId?: InputMaybe<Scalars['Int']['input']>;
	uri?: InputMaybe<Scalars['String']['input']>;
};

export type Lessons_Segment_EntryStateArgs = {
	label?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Navigation_Category = CategoryInterface &
	ElementInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		/** The category’s children. */
		children?: Maybe<Array<Maybe<CategoryInterface>>>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The handle of the group that contains the category. */
		groupHandle?: Maybe<Scalars['String']['output']>;
		/** The ID of the group that contains the category. */
		groupId?: Maybe<Scalars['Int']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The element’s level within its structure */
		level?: Maybe<Scalars['Int']['output']>;
		/** The element’s left position within its structure. */
		lft?: Maybe<Scalars['Int']['output']>;
		/** The same element in other locales. */
		localized?: Maybe<Array<Maybe<CategoryInterface>>>;
		/** Returns the next element relative to this one, from a given set of criteria. */
		next?: Maybe<CategoryInterface>;
		/** The category’s parent. */
		parent?: Maybe<CategoryInterface>;
		/** Returns the previous element relative to this one, from a given set of criteria. */
		prev?: Maybe<CategoryInterface>;
		/** The element’s right position within its structure. */
		rgt?: Maybe<Scalars['Int']['output']>;
		/** The element’s structure’s root ID */
		root?: Maybe<Scalars['Int']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		seoSettings?: Maybe<Scalars['String']['output']>;
		/** This query is used to query for SEOmatic meta data. */
		seomatic?: Maybe<SeomaticInterface>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s structure ID. */
		structureId?: Maybe<Scalars['Int']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
		/** The element’s full URL */
		url?: Maybe<Scalars['String']['output']>;
	};

export type Navigation_Category_CountArgs = {
	field: Scalars['String']['input'];
};

export type Navigation_CategoryChildrenArgs = {
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Navigation_CategoryLocalizedArgs = {
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Navigation_CategoryNextArgs = {
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Navigation_CategoryParentArgs = {
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Navigation_CategoryPrevArgs = {
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Navigation_CategorySeomaticArgs = {
	asArray?: InputMaybe<Scalars['Boolean']['input']>;
	environment?: InputMaybe<SeomaticEnvironment>;
	site?: InputMaybe<Scalars['String']['input']>;
	siteId?: InputMaybe<Scalars['Int']['input']>;
	uri?: InputMaybe<Scalars['String']['input']>;
};

export type Options_TableRow = {
	answer?: Maybe<Scalars['String']['output']>;
	col1?: Maybe<Scalars['String']['output']>;
	col2?: Maybe<Scalars['Boolean']['output']>;
	correctAnswer?: Maybe<Scalars['Boolean']['output']>;
};

export type Questions_BlockType = ElementInterface &
	SuperTableBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		description?: Maybe<Scalars['String']['output']>;
		elements?: Maybe<Scalars['String']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the field that owns the Super Table block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		hotspotTitle?: Maybe<Scalars['String']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		keyword?: Maybe<Scalars['String']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The ID of the element that owns the Super Table block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		question?: Maybe<Scalars['String']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the Super Table block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the Super Table block's type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type Questions_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type Questions_MatrixField =
	| Questions_FillInTheBlanks_BlockType
	| Questions_MultipleChoice_BlockType
	| Questions_MultipleOptions_BlockType
	| Questions_TrueOrFalse_BlockType;

export type Questions_SuperTableField = Questions_BlockType;

export type Questions_FillInTheBlanks_BlockType = ElementInterface &
	MatrixBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		answerMustBeANumber?: Maybe<Scalars['Boolean']['output']>;
		answersAreInAnyOrder?: Maybe<Scalars['Boolean']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		correctAnswers?: Maybe<Array<Maybe<CorrectAnswers_TableRow>>>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		detailedAnswer?: Maybe<Scalars['String']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the field that owns the matrix block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The ID of the element that owns the matrix block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the matrix block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		statement?: Maybe<Scalars['String']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The handle of the matrix block’s type. */
		typeHandle?: Maybe<Scalars['String']['output']>;
		/** The ID of the matrix block’s type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type Questions_FillInTheBlanks_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type Questions_MultipleChoice_BlockType = ElementInterface &
	MatrixBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		detailedAnswer?: Maybe<Scalars['String']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the field that owns the matrix block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		options?: Maybe<Array<Maybe<Options_TableRow>>>;
		/** The ID of the element that owns the matrix block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the matrix block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		statement?: Maybe<Scalars['String']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The handle of the matrix block’s type. */
		typeHandle?: Maybe<Scalars['String']['output']>;
		/** The ID of the matrix block’s type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type Questions_MultipleChoice_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type Questions_MultipleOptions_BlockType = ElementInterface &
	MatrixBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		detailedAnswer?: Maybe<Scalars['String']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the field that owns the matrix block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		options?: Maybe<Array<Maybe<Options_TableRow>>>;
		/** The ID of the element that owns the matrix block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the matrix block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		statement?: Maybe<Scalars['String']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The handle of the matrix block’s type. */
		typeHandle?: Maybe<Scalars['String']['output']>;
		/** The ID of the matrix block’s type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type Questions_MultipleOptions_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type Questions_TrueOrFalse_BlockType = ElementInterface &
	MatrixBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		correctAnswer?: Maybe<Scalars['Boolean']['output']>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		detailedAnswer?: Maybe<Scalars['String']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the field that owns the matrix block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The ID of the element that owns the matrix block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the matrix block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		statement?: Maybe<Scalars['String']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The handle of the matrix block’s type. */
		typeHandle?: Maybe<Scalars['String']['output']>;
		/** The ID of the matrix block’s type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type Questions_TrueOrFalse_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type QuizzesTaken_BlockType = ElementInterface &
	SuperTableBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		completed?: Maybe<Scalars['Boolean']['output']>;
		course?: Maybe<Array<Maybe<EntryInterface>>>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		dateTaken?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the field that owns the Super Table block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		lesson?: Maybe<Array<Maybe<EntryInterface>>>;
		numberOfItems?: Maybe<Scalars['String']['output']>;
		/** The ID of the element that owns the Super Table block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		percentage?: Maybe<Scalars['Number']['output']>;
		quiz?: Maybe<Array<Maybe<EntryInterface>>>;
		score?: Maybe<Scalars['String']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		skipped?: Maybe<Scalars['Boolean']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the Super Table block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the Super Table block's type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type QuizzesTaken_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type QuizzesTaken_BlockTypeCourseArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QuizzesTaken_BlockTypeLessonArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QuizzesTaken_BlockTypeQuizArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QuizzesTaken_SuperTableField = QuizzesTaken_BlockType;

export type Quizzes_Quizzes_Entry = ElementInterface &
	EntryInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
		ancestors?: Maybe<Array<Maybe<EntryInterface>>>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		/** The entry’s author. */
		author?: Maybe<UserInterface>;
		/** The ID of the author of this entry. */
		authorId?: Maybe<Scalars['Int']['output']>;
		/** Returns the entry’s canonical ID. */
		canonicalId?: Maybe<Scalars['Int']['output']>;
		/** Returns the entry’s canonical UUID. */
		canonicalUid?: Maybe<Scalars['String']['output']>;
		/** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
		children?: Maybe<Array<Maybe<EntryInterface>>>;
		/** The current revision for the entry. */
		currentRevision?: Maybe<EntryInterface>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		/** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
		descendants?: Maybe<Array<Maybe<EntryInterface>>>;
		description?: Maybe<Scalars['String']['output']>;
		/** The creator of a given draft. */
		draftCreator?: Maybe<UserInterface>;
		/** The draft ID (from the `drafts` table). */
		draftId?: Maybe<Scalars['Int']['output']>;
		/** The name of the draft. */
		draftName?: Maybe<Scalars['String']['output']>;
		/** The notes for the draft. */
		draftNotes?: Maybe<Scalars['String']['output']>;
		/** The drafts for the entry. */
		drafts?: Maybe<Array<Maybe<EntryInterface>>>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The expiry date of the entry. */
		expiryDate?: Maybe<Scalars['DateTime']['output']>;
		genericSwitch?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		/** Returns whether this is a draft. */
		isDraft?: Maybe<Scalars['Boolean']['output']>;
		/** Returns whether this is a revision. */
		isRevision?: Maybe<Scalars['Boolean']['output']>;
		/** Returns whether this is an unpublished draft. */
		isUnpublishedDraft?: Maybe<Scalars['Boolean']['output']>;
		/** Returns whether this is an unpublished draft. **This field is deprecated.** `isUnpublishedDraft` should be used instead. */
		isUnsavedDraft?: Maybe<Scalars['Boolean']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The element’s level within its structure */
		level?: Maybe<Scalars['Int']['output']>;
		/** The element’s left position within its structure. */
		lft?: Maybe<Scalars['Int']['output']>;
		/** The same element in other locales. */
		localized?: Maybe<Array<Maybe<EntryInterface>>>;
		/** Returns the next element relative to this one, from a given set of criteria. */
		next?: Maybe<EntryInterface>;
		/** The entry’s parent, if the section is a structure. */
		parent?: Maybe<EntryInterface>;
		/** The entry’s post date. */
		postDate?: Maybe<Scalars['DateTime']['output']>;
		/** Returns the previous element relative to this one, from a given set of criteria. */
		prev?: Maybe<EntryInterface>;
		questions?: Maybe<Array<Maybe<Questions_MatrixField>>>;
		questionsLength?: Maybe<Scalars['Number']['output']>;
		randomizeQuestions?: Maybe<Scalars['Boolean']['output']>;
		/** The creator of a given revision. */
		revisionCreator?: Maybe<UserInterface>;
		/** The revision ID (from the `revisions` table). */
		revisionId?: Maybe<Scalars['Int']['output']>;
		/** The revision notes (from the `revisions` table). */
		revisionNotes?: Maybe<Scalars['String']['output']>;
		/** The revisions for the entry. */
		revisions?: Maybe<Array<Maybe<EntryInterface>>>;
		/** The element’s right position within its structure. */
		rgt?: Maybe<Scalars['Int']['output']>;
		/** The element’s structure’s root ID */
		root?: Maybe<Scalars['Int']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The handle of the section that contains the entry. */
		sectionHandle?: Maybe<Scalars['String']['output']>;
		/** The ID of the section that contains the entry. */
		sectionId?: Maybe<Scalars['Int']['output']>;
		/** This query is used to query for SEOmatic meta data. */
		seomatic?: Maybe<SeomaticInterface>;
		setAsPublicQuiz?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/**
		 * Returns the entry’s canonical ID.
		 * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
		 */
		sourceId?: Maybe<Scalars['Int']['output']>;
		/**
		 * Returns the entry’s canonical UUID.
		 * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
		 */
		sourceUid?: Maybe<Scalars['String']['output']>;
		state?: Maybe<Scalars['String']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s structure ID. */
		structureId?: Maybe<Scalars['Int']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The handle of the entry type that contains the entry. */
		typeHandle?: Maybe<Scalars['String']['output']>;
		/** The ID of the entry type that contains the entry. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
		/** The element’s full URL */
		url?: Maybe<Scalars['String']['output']>;
	};

export type Quizzes_Quizzes_Entry_CountArgs = {
	field: Scalars['String']['input'];
};

export type Quizzes_Quizzes_EntryAncestorsArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Quizzes_Quizzes_EntryChildrenArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Quizzes_Quizzes_EntryDescendantsArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Quizzes_Quizzes_EntryDraftsArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Quizzes_Quizzes_EntryLocalizedArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Quizzes_Quizzes_EntryNextArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Quizzes_Quizzes_EntryParentArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Quizzes_Quizzes_EntryPrevArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Quizzes_Quizzes_EntryQuestionsArgs = {
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Quizzes_Quizzes_EntryRevisionsArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Quizzes_Quizzes_EntrySeomaticArgs = {
	asArray?: InputMaybe<Scalars['Boolean']['input']>;
	environment?: InputMaybe<SeomaticEnvironment>;
	site?: InputMaybe<Scalars['String']['input']>;
	siteId?: InputMaybe<Scalars['Int']['input']>;
	uri?: InputMaybe<Scalars['String']['input']>;
};

export type Quizzes_Quizzes_EntryStateArgs = {
	label?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Scenes_BlockType = ElementInterface &
	SuperTableBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		coords?: Maybe<Scalars['String']['output']>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the field that owns the Super Table block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The ID of the element that owns the Super Table block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		parentHandle?: Maybe<Scalars['String']['output']>;
		sceneHandle?: Maybe<Scalars['String']['output']>;
		sceneImage?: Maybe<Array<Maybe<AssetInterface>>>;
		sceneLevel?: Maybe<Scalars['String']['output']>;
		sceneTitle?: Maybe<Scalars['String']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the Super Table block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the Super Table block's type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type Scenes_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type Scenes_BlockTypeSceneImageArgs = {
	altText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateModified?: InputMaybe<Scalars['String']['input']>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
	kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Scenes_BlockTypeSceneLevelArgs = {
	label?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Scenes_SuperTableField = Scenes_BlockType;

export type SingleBuilder_Block_BlockType = ElementInterface &
	MatrixBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		backgroundImage?: Maybe<Array<Maybe<AssetInterface>>>;
		contentType?: Maybe<Scalars['String']['output']>;
		customLink?: Maybe<Array<Maybe<CustomLink_SuperTableField>>>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		description?: Maybe<Scalars['String']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the field that owns the matrix block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		heading?: Maybe<Scalars['String']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		image?: Maybe<Array<Maybe<AssetInterface>>>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The ID of the element that owns the matrix block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the matrix block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The handle of the matrix block’s type. */
		typeHandle?: Maybe<Scalars['String']['output']>;
		/** The ID of the matrix block’s type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type SingleBuilder_Block_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type SingleBuilder_Block_BlockTypeBackgroundImageArgs = {
	altText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateModified?: InputMaybe<Scalars['String']['input']>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
	kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SingleBuilder_Block_BlockTypeContentTypeArgs = {
	label?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SingleBuilder_Block_BlockTypeCustomLinkArgs = {
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SingleBuilder_Block_BlockTypeImageArgs = {
	altText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateModified?: InputMaybe<Scalars['String']['input']>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
	kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SingleBuilder_Features_BlockType = ElementInterface &
	MatrixBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		features?: Maybe<Array<Maybe<Features_SuperTableField>>>;
		/** The ID of the field that owns the matrix block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The ID of the element that owns the matrix block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the matrix block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The handle of the matrix block’s type. */
		typeHandle?: Maybe<Scalars['String']['output']>;
		/** The ID of the matrix block’s type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type SingleBuilder_Features_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type SingleBuilder_Features_BlockTypeFeaturesArgs = {
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SingleBuilder_Html_BlockType = ElementInterface &
	MatrixBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		backgroundImage?: Maybe<Array<Maybe<AssetInterface>>>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the field that owns the matrix block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		htmlContent?: Maybe<Scalars['String']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The ID of the element that owns the matrix block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the matrix block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The handle of the matrix block’s type. */
		typeHandle?: Maybe<Scalars['String']['output']>;
		/** The ID of the matrix block’s type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type SingleBuilder_Html_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type SingleBuilder_Html_BlockTypeBackgroundImageArgs = {
	altText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateModified?: InputMaybe<Scalars['String']['input']>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
	kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SingleBuilder_ImageCarousel_BlockType = ElementInterface &
	MatrixBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the field that owns the matrix block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The ID of the element that owns the matrix block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		slides?: Maybe<Array<Maybe<Slides_SuperTableField>>>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the matrix block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The handle of the matrix block’s type. */
		typeHandle?: Maybe<Scalars['String']['output']>;
		/** The ID of the matrix block’s type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type SingleBuilder_ImageCarousel_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type SingleBuilder_ImageCarousel_BlockTypeSlidesArgs = {
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SingleBuilder_TextCarousel_BlockType = ElementInterface &
	MatrixBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the field that owns the matrix block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The ID of the element that owns the matrix block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		slides?: Maybe<Array<Maybe<Slides_SuperTableField>>>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the matrix block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The handle of the matrix block’s type. */
		typeHandle?: Maybe<Scalars['String']['output']>;
		/** The ID of the matrix block’s type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type SingleBuilder_TextCarousel_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type SingleBuilder_TextCarousel_BlockTypeSlidesArgs = {
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Slides_BlockType = ElementInterface &
	SuperTableBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		author?: Maybe<Scalars['String']['output']>;
		backgroundImage?: Maybe<Array<Maybe<AssetInterface>>>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the field that owns the Super Table block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The ID of the element that owns the Super Table block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the Super Table block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		statement?: Maybe<Scalars['String']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the Super Table block's type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type Slides_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type Slides_BlockTypeBackgroundImageArgs = {
	altText?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateModified?: InputMaybe<Scalars['String']['input']>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	filename?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	height?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includeSubfolders?: InputMaybe<Scalars['Boolean']['input']>;
	kind?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	size?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uploader?: InputMaybe<Scalars['QueryArgument']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volume?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	width?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Slides_SuperTableField = Slides_BlockType;

export type Spots_BlockType = ElementInterface &
	SuperTableBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		areaName?: Maybe<Scalars['String']['output']>;
		coords?: Maybe<Scalars['String']['output']>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the field that owns the Super Table block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The ID of the element that owns the Super Table block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the Super Table block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		spotContent?: Maybe<Scalars['String']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the Super Table block's type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type Spots_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type Spots_SuperTableField = Spots_BlockType;

export type TermsAndDefinitions_BlockType = ElementInterface &
	SuperTableBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		definition?: Maybe<Scalars['String']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the field that owns the Super Table block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The ID of the element that owns the Super Table block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the Super Table block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		term?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the Super Table block's type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type TermsAndDefinitions_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type TermsAndDefinitions_SuperTableField = TermsAndDefinitions_BlockType;

export type TextCards_BlockType = ElementInterface &
	SuperTableBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		cards?: Maybe<Array<Maybe<Cards_MatrixField>>>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the field that owns the Super Table block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The ID of the element that owns the Super Table block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the Super Table block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the Super Table block's type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type TextCards_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type TextCards_BlockTypeCardsArgs = {
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TextCards_SuperTableField = TextCards_BlockType;

export type Text_BlockType = ElementInterface &
	SuperTableBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		blocks?: Maybe<Array<Maybe<Blocks_MatrixField>>>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the field that owns the Super Table block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The ID of the element that owns the Super Table block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the Super Table block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The ID of the Super Table block's type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type Text_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type Text_BlockTypeBlocksArgs = {
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Text_SuperTableField = Text_BlockType;

export type Timestamps_TableRow = {
	col1?: Maybe<Scalars['Number']['output']>;
	col2?: Maybe<Scalars['String']['output']>;
	description?: Maybe<Scalars['String']['output']>;
	time?: Maybe<Scalars['Number']['output']>;
};

export type UserCourses_MatrixField = UserCourses_Course_BlockType;

export type UserCourses_Course_BlockType = ElementInterface &
	MatrixBlockInterface & {
		/** Return a number of related elements for a field. */
		_count?: Maybe<Scalars['Int']['output']>;
		/** Whether the element is archived or not. */
		archived?: Maybe<Scalars['Boolean']['output']>;
		audios?: Maybe<Array<Maybe<Audios_SuperTableField>>>;
		completed?: Maybe<Scalars['Boolean']['output']>;
		completedLessons?: Maybe<Array<Maybe<EntryInterface>>>;
		completedSegments?: Maybe<Array<Maybe<EntryInterface>>>;
		completedVideos?: Maybe<Array<Maybe<CompletedVideos_SuperTableField>>>;
		completionDate?: Maybe<Scalars['DateTime']['output']>;
		course?: Maybe<Array<Maybe<EntryInterface>>>;
		/** The date the element was created. */
		dateCreated?: Maybe<Scalars['DateTime']['output']>;
		/** The date the element was last updated. */
		dateUpdated?: Maybe<Scalars['DateTime']['output']>;
		/** Whether the element is enabled or not. */
		enabled?: Maybe<Scalars['Boolean']['output']>;
		expiryDate?: Maybe<Scalars['DateTime']['output']>;
		/** The ID of the field that owns the matrix block. */
		fieldId?: Maybe<Scalars['Int']['output']>;
		/** The ID of the entity */
		id?: Maybe<Scalars['ID']['output']>;
		instructorPreview?: Maybe<Scalars['Boolean']['output']>;
		/** The language of the site element is associated with. */
		language?: Maybe<Scalars['String']['output']>;
		/** The ID of the element that owns the matrix block. */
		ownerId?: Maybe<Scalars['Int']['output']>;
		quizzesTaken?: Maybe<Array<Maybe<QuizzesTaken_SuperTableField>>>;
		/** The element’s search score, if the `search` parameter was used when querying for the element. */
		searchScore?: Maybe<Scalars['String']['output']>;
		/** The ID of the site the element is associated with. */
		siteId?: Maybe<Scalars['Int']['output']>;
		/** The unique identifier for an element-site relation. */
		siteSettingsId?: Maybe<Scalars['ID']['output']>;
		/** The element’s slug. */
		slug?: Maybe<Scalars['String']['output']>;
		/** The sort order of the matrix block within the owner element field. */
		sortOrder?: Maybe<Scalars['Int']['output']>;
		/** The element’s status. */
		status?: Maybe<Scalars['String']['output']>;
		/** The element’s title. */
		title?: Maybe<Scalars['String']['output']>;
		/** Whether the element has been soft-deleted or not. */
		trashed?: Maybe<Scalars['Boolean']['output']>;
		/** The handle of the matrix block’s type. */
		typeHandle?: Maybe<Scalars['String']['output']>;
		/** The ID of the matrix block’s type. */
		typeId?: Maybe<Scalars['Int']['output']>;
		/** The UID of the entity */
		uid?: Maybe<Scalars['String']['output']>;
		/** The element’s URI. */
		uri?: Maybe<Scalars['String']['output']>;
	};

export type UserCourses_Course_BlockType_CountArgs = {
	field: Scalars['String']['input'];
};

export type UserCourses_Course_BlockTypeAudiosArgs = {
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UserCourses_Course_BlockTypeCompletedLessonsArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserCourses_Course_BlockTypeCompletedSegmentsArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserCourses_Course_BlockTypeCompletedVideosArgs = {
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UserCourses_Course_BlockTypeCourseArgs = {
	accessDays?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	after?: InputMaybe<Scalars['String']['input']>;
	ancestorDist?: InputMaybe<Scalars['Int']['input']>;
	ancestorOf?: InputMaybe<Scalars['Int']['input']>;
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	audio?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	authorGroupId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	before?: InputMaybe<Scalars['String']['input']>;
	certificateTitle?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	classEndorsementCode?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	courseThumbnail?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	descendantDist?: InputMaybe<Scalars['Int']['input']>;
	descendantOf?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	detailedDescription?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	draftCreator?: InputMaybe<Scalars['Int']['input']>;
	draftId?: InputMaybe<Scalars['Int']['input']>;
	draftOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	drafts?: InputMaybe<Scalars['Boolean']['input']>;
	editable?: InputMaybe<Scalars['Boolean']['input']>;
	eldtApproved?: InputMaybe<Scalars['Boolean']['input']>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	genericSwitch?: InputMaybe<Scalars['Boolean']['input']>;
	hasDescendants?: InputMaybe<Scalars['Boolean']['input']>;
	hideInBrowseCourses?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	includedLessons?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	leaves?: InputMaybe<Scalars['Boolean']['input']>;
	lessonImage?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	level?: InputMaybe<Scalars['Int']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	locked?: InputMaybe<Scalars['Boolean']['input']>;
	nextSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	positionedAfter?: InputMaybe<Scalars['Int']['input']>;
	positionedBefore?: InputMaybe<Scalars['Int']['input']>;
	postDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	prevSiblingOf?: InputMaybe<Scalars['Int']['input']>;
	price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	provisionalDrafts?: InputMaybe<Scalars['Boolean']['input']>;
	questionsLength?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	quiz?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	randomizeQuestions?: InputMaybe<Scalars['Boolean']['input']>;
	readingTime?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedCourses?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	revisionCreator?: InputMaybe<Scalars['Int']['input']>;
	revisionId?: InputMaybe<Scalars['Int']['input']>;
	revisionOf?: InputMaybe<Scalars['QueryArgument']['input']>;
	revisions?: InputMaybe<Scalars['Boolean']['input']>;
	search?: InputMaybe<Scalars['String']['input']>;
	section?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	sectionId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	seoSettings?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	setAsPublicQuiz?: InputMaybe<Scalars['Boolean']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	state?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	structureId?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	withStructure?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserCourses_Course_BlockTypeQuizzesTakenArgs = {
	archived?: InputMaybe<Scalars['Boolean']['input']>;
	dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	enabledForSite?: InputMaybe<Scalars['Boolean']['input']>;
	fieldId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	fixedOrder?: InputMaybe<Scalars['Boolean']['input']>;
	id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	inReverse?: InputMaybe<Scalars['Boolean']['input']>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Scalars['String']['input']>;
	ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	preferSites?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	ref?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	relatedTo?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAll?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
	relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
	relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
	relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
	relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
	search?: InputMaybe<Scalars['String']['input']>;
	site?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	siteSettingsId?: InputMaybe<
		Array<InputMaybe<Scalars['QueryArgument']['input']>>
	>;
	slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	title?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	trashed?: InputMaybe<Scalars['Boolean']['input']>;
	typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
	uid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	unique?: InputMaybe<Scalars['Boolean']['input']>;
	uri?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};
